import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useCardStyles from '../style/card.style';

// import { Book } from './BooksWriteForm';

export interface Book{
  id?: number;
  title: string;
  authors: string;
  translators?: string;
  contents?: string;
  description?: string;
  userId?: string;
  createdAt?: string;
  isbn: number;
  url?: string;
  state?: string;
  thumbnail?: string;
  publisher: string;
  price?: number;
  datetime?: string;
  sale_price: number;
}

export default function CardForm(data: Book): JSX.Element {
  const {
    title, authors, isbn, state,
    publisher, sale_price, thumbnail,
  } = data;

  const classes = useCardStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.card}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container xs={12}>
            <Grid item xs={12} className={classes.pos}>
              <Button component={Link} to="/">
                <img src={thumbnail} alt="img" style={{ width: '210px', height: '150px', borderRadius: '30px' }} />
              </Button>

            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title} gutterBottom>
                {title}
              </Typography>
              <Typography className={classes.pos} variant="h6">
                {publisher}
              </Typography>
              <Typography variant="h6">
                {authors}
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.pos}>
              <Typography variant="h5" component="p" className={classes.priceText}>
                {sale_price}
              </Typography>
              {/* <Typography variant="h6" component="p" className={classes.rightText}>
                {state}
              </Typography>
              <Typography variant="h6" component="p" className={classes.rightText}>
                {isbn}
              </Typography> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
