import React from 'react';

import GoogleLogin from 'react-google-login';
import { Paper, Grid, Typography } from '@material-ui/core';
// import axios from 'axios-hooks';

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
  //   throw e
  // }
};

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

export default function GoogleLoginß(): JSX.Element {
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
          <Grid item xs={12} style={{ paddingTop: 80, paddingLeft: 80, position: 'relative' }}>
            <Typography style={{ fontSize: 20 }}>
              로그인
            </Typography>
          </Grid>
          <Grid item style={{ paddingLeft: 90, paddingTop: 80 }}>
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
