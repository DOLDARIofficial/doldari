import React from 'react';
import {
  Grid, Checkbox, Typography, FormGroup, FormControlLabel,
} from '@material-ui/core';

interface checkprops {
  title: string;
  handleState: (event: any) => void;
}
export default function Checkboxes(item: checkprops): JSX.Element {
  const { title, handleState } = item;
  const [state] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  // const handleChange = (event: any) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <Grid container spacing={2} style={{ alignItems: 'center', paddingLeft: 20 }}>
      <Grid item>
        <Typography style={{ fontSize: 15 }}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <FormGroup row>
          <FormControlLabel
            control={(
              <Checkbox
                checked={state.checkedA}
                onChange={handleState}
                name="checkedA"
                color="primary"
              />
        )}
            label="없음"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={state.checkedB}
                onChange={handleState}
                name="checkedB"
                color="primary"
              />
        )}
            label="필기"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={state.checkedF}
                onChange={handleState}
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
