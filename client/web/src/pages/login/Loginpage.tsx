import React from 'react';

import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { Paper, Grid, Typography } from '@material-ui/core';
import useAxios from 'axios-hooks';
import useAuthContext from '../../util/hooks/useAuthContext';
// import axios from 'axios-hooks';

interface loginProps {
  handleLogin: () => void;

}

const onFailure = (response: any) => {
  console.log(response);
};

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={googleLogin}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('googleButton')
// );

export default function Login(): JSX.Element {
  const history = useHistory();
  // const [isLogin, setLogin] = React.useState<any>();
  const [, excutePost] = useAxios({ url: '/auth/create', method: 'post' }, { manual: true });
  const authContext = useAuthContext();
  const googleLogin = async (response: any) => {
    // login 로직 구현
    // const option = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'post',
    //   data: {
    //     accessToken: response.accessToken,
    //   },
    //   url: 'localhost:3001' + '/auth/google',
    // };

    // try {
    //   return await axios(option);
    // } catch (e) {
    //   throw e;
    // }

    excutePost({
      data: response.profileObj,
    }).then((res) => {
      if (res) {
        authContext.handleLogin(response.accessToken);
        console.log(response);
      }
      history.push('/');
    }).catch((err) => console.log(err.message));
  };

  return (
    <Grid style={{
      paddingTop: 100, display: 'flex', justifyContent: 'center',
    }}
    >
      <Paper
        style={{
          width: '40vh', height: '40vh', borderRadius: '100px', justifyContent: 'center',
        }}
        elevation={0}
      >
        <Grid container>
          <Grid item xs={12} style={{ paddingTop: 50, paddingLeft: 80, position: 'relative' }}>
            <Typography style={{ fontSize: 30 }}>
              로그인
            </Typography>
          </Grid>
          <Grid item style={{ paddingTop: 60, paddingLeft: 80, position: 'relative' }}>
            <GoogleLogin
              clientId="822280945870-am3tfoa2vg72q6sabr7qi0ogoj9gast6.apps.googleusercontent.com"
              buttonText="Google 로그인"
              onSuccess={googleLogin}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
