/* 
* 작성자 : 박상은
* 작성일 : 2020.12.03
* useHistory hook : 뒤로가기, 새로고침, 페이지상태 유지를 하는데사용되는 훅입니다.
*/

import { useState, useCallback } from 'react';

const historyStorage = ((history) => {
  history.replaceState = ((replaceState)
  => (state = {}, title, url) => replaceState.call(history, { ...history.state, ...state }, title, url))(
    history.replaceState,
  );

  const get = (key) => history.state?.page?.[key];
  const set = (key, value, replace = false) => {
    history.replaceState({
      page: replace
        ? { [key]: value }
        : { ...history.state?.page, [key]: value },
    });
  };

  return { set, get };
})(typeof window !== 'undefined' ? window.history : {});

const useHistoryState = (initialState, key) => {
  const stateValue = historyStorage.get(key);

  const [historyState, setHistoryState] = useState(
    stateValue === undefined ? initialState : stateValue,
  );

  const setState = useCallback(
    (state, replace = false) => {
      const value = state instanceof Function ? state(historyState) : state;

      setHistoryState(() => value);
      historyStorage.set(key, value, replace);
    },
    [historyState, key],
  );

  return [historyState, setState];
};

export default useHistoryState;
