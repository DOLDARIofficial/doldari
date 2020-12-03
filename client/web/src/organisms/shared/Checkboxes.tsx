import React from 'react';
import {
  Grid, Checkbox, Typography, FormGroup, FormControlLabel,
} from '@material-ui/core';

interface checkprops {
  title: string;
  handleState: (d: any) => void;
}
export default function Checkboxes(item: checkprops): JSX.Element {
  const { title, handleState } = item;
  const [isUnderline, setStateA] = React.useState(' ');
  const [isWrite, setStateB] = React.useState(' ');
  const [check, setCheck] = React.useState({
    checkA: false,
    checkB: false,
  });

  const handleUnderline = (event: any) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setCheck({ ...check, checkB: true });
      setStateA('밑줄');
    } else {
      setCheck({ ...check, checkB: false });
      setStateA('');
    }
    console.log(isUnderline);
  };

  const handleWrite = (event: any) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setCheck({ ...check, checkA: true });
      setStateB('필기');
    } else {
      setCheck({ ...check, checkA: false });
      setStateB('');
    }
    console.log(isUnderline);
  };

  // const handleCheck = (event: any) => {
  //   setCheck({ ...check, [event.target.name]: event.target.checked });
  // };

  React.useEffect(() => {
    handleState(`${isWrite},${isUnderline}`);
    console.log(`${isWrite},${isUnderline}`);
  }, [isWrite, isUnderline]);

  return (
    <Grid container spacing={2} style={{ alignItems: 'center', paddingLeft: 20 }}>
      <Grid item>
        <Typography style={{ fontSize: 15 }}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <FormGroup row>
          {/* <FormControlLabel
            control={(
              <Checkbox
                checked={check}
                onChange={handleNone}
                name="checkedA"
                color="primary"
              />
        )}
            label="없음"
          /> */}
          <FormControlLabel
            control={(
              <Checkbox
                checked={check.checkA}
                onChange={
                  handleWrite
                }
                name="checkedB"
                color="primary"
              />
        )}
            label="필기"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={check.checkB}
                onChange={handleUnderline}
                name="checkedF"
                color="primary"
              />
      )}
            label="밑줄"
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
}
