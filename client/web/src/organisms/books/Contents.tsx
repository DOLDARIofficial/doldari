import React from 'react';
import {
  Grid, ButtonBase, makeStyles, Typography, Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface Book{
  bookid: string;
  title: string;
  writer: string;
  isbn: string;
  price: number;
  publisher: string;
  date: Date;
  userid: string;
  state: string;
}

const useStyles = makeStyles((theme) => ({
  transparent: {
    background: '#00ff0000',
    color: '#00ff0000',
  },

  image: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  nametag: {
    fontSize: 'h2',
    textAlign: 'center',
  },

  pricetag: {
    color: '#FF7F50',
    fontSize: '14px',
    textAlign: 'right',
  },

  wrap: {
    alignContent: 'center',
    width: '110',
    height: '128',
  },

  entire: {
    width: '150',
    height: '150',
  },

}));

export default function GridTool(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Grid container>
        <div style={{ width: 190, height: 250, margin: '30px auto' }}>
          <Grid container>
            <Grid item>
              <Paper className={classes.wrap}>
                <ButtonBase className={classes.image} component={Link} to="/books/detail">
                  <img className={classes.image} alt="complex" src="https://ifh.cc/g/2JYFaB.jpg" width="190" height="190" />
                </ButtonBase>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.nametag}>
              오늘의 도서
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                저자 : 윤석준
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                출판사 : DolDaRi
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.pricetag}>
              11900원
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid container>
        <div style={{ width: 190, height: 250, margin: '30px auto' }}>
          <Grid container>
            <Grid item>
              <Paper className={classes.wrap}>
                <ButtonBase className={classes.image} component={Link} to="/books/detail">
                  <img className={classes.image} alt="complex" src="https://ifh.cc/g/2JYFaB.jpg" width="190" height="190" />
                </ButtonBase>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.nametag}>
              오늘의 도서
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                저자 : 윤석준
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                출판사 : DolDaRi
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.pricetag}>
              11900원
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid container>
        <div style={{ width: 190, height: 250, margin: '30px auto' }}>
          <Grid container>
            <Grid item>
              <Paper className={classes.wrap}>
                <ButtonBase className={classes.image} component={Link} to="/books/detail">
                  <img className={classes.image} alt="complex" src="https://ifh.cc/g/2JYFaB.jpg" width="190" height="190" />
                </ButtonBase>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.nametag}>
              오늘의 도서
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              저자 : 윤석준
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              출판사 : DolDaRi
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.pricetag}>
              11900원
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid container>
        <div style={{ width: 190, height: 250, margin: '30px auto' }}>
          <Grid container>
            <Grid item>
              <Paper className={classes.wrap}>
                <ButtonBase className={classes.image} component={Link} to="/books/detail">
                  <img className={classes.image} alt="complex" src="https://ifh.cc/g/2JYFaB.jpg" width="190" height="190" />
                </ButtonBase>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.nametag}>
              오늘의 도서
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                저자 : 윤석준
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                출판사 : DolDaRi
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.pricetag}>
              11900원
            </Typography>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
