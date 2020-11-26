import React from 'react'
import { Grid , Button , makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      maxWidth: 1200,
    },
    place: {
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    date: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    image: {
      width: 150,
      height: 125,
    },
    img: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    
  }));

export default function Hgrid():JSX.Element {
    const classes = useStyles();
    return (
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Button size="medium">
                                <Typography gutterBottom variant="h6" >
                                (제목입니다) 피트니스 센터 양도합니다!
                                </Typography>
                            </Button>

                            <Grid container className={classes.root} spacing={2}>
                              <Grid item xs={12}>
                                <Grid container justify="flex-start" spacing={2}>
                                    <Grid item>
                                      <Typography color="textSecondary">위치</Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography>금정구 수림로 91번지 31</Typography>
                                    </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid container className={classes.root} spacing={2}>
                              <Grid item xs={12}>
                                <Grid container justify="flex-start" spacing={2}>
                                    <Grid item>
                                      <Typography color="textSecondary">기한</Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography>21년 1월 24일까지</Typography>
                                    </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="2.png" />
                        </ButtonBase>
                        <Grid>
                        <img alt="complex" src="812.png" /> 
                        </Grid>
                        <Grid item>
                        <Typography variant="subtitle1">50000원</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
    )}