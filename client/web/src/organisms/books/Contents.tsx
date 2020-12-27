import React from 'react';
import {
  Grid, ButtonBase, makeStyles, Typography, Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface Book{
  id?: number;
  title?: string;
  authors?: string;
  translators?: string;
  contents?: string;
  description?: string;
  userId?: string;
  createdAt?: string;
  isbn?: number;
  url?: string;
  state?: string;
  thumbnail?: string;
  publisher?: string;
  price?: number;
  datetime?: string;
  sale_price?: number;
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

export default function BookContent(data: Book): JSX.Element {
  const {
    title, authors,
    publisher, sale_price, thumbnail,
  } = data;

  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Grid container>
        <div style={{ width: 190, height: 250, margin: '30px auto' }}>
          <Grid container>
            <Grid item>
              <Paper className={classes.wrap}>
                <ButtonBase className={classes.image} component={Link} to="/books/detail">
                  <img className={classes.image} alt="complex" src={thumbnail} width="190" height="190" />
                </ButtonBase>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.nametag}>
              {title}
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                저자 :
                {authors}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                출판사 :
                {publisher}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.pricetag}>
              {sale_price}
            </Typography>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
