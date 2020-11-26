import React from 'react';
<<<<<<< HEAD
import { fade, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
    },
    

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },

      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      inputRoot: {
        color: 'inherit',
      },

      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },

  }),
);


export default function _main() {
  const classes = useStyles();
  
  return(
  <div style={{width: '100%', margin: 0}}>
  <div style={{width:'100%', margin: '50px'}}>
    {/* <Navi/> */}

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
          <Link to='/rooms'><img src='logo_2.png'/></Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
          <Link to='/health'><img src='logo_2.png'/></Link>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
          <Link to='/books'><img src='logo_2.png'/></Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </div>
  </div>

  );
}
=======
// import useAxios from 'axios-hooks';

export default function Mainpage(): JSX.Element {
  // const [data, executeGet] = useAxios(
  //   { url: '/test', method: 'get' }, { manual: true },
  // );
  return (
    <div />
  );
}
>>>>>>> c7f93c72c04663751a3486c27bcd5546255294c9
