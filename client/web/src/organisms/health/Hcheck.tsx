import React from 'react';
import {
  Grid, Checkbox, FormGroup, FormControlLabel,
} from '@material-ui/core';

interface checkprops {
  handleState: (event: any) => void;
}
export default function Checkboxes(item: checkprops): JSX.Element {
  const { handleState } = item;
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
            label="있음"
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
            label="없음"
          />

        </FormGroup>
      </Grid>
    </Grid>
  );
}
