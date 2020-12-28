import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useCardStyles from '../../organisms/style/card.style';

export interface Room{
  roomId?: number;
  userId?: string;
  content?: string;
  title?: string;
  createdAt?: string;
  locationCode: string;
  warrentyPrice: number;
}

export default function CardForm(data: Room): JSX.Element {
  const {
    roomId, userId, content, title, createdAt, warrentyPrice, locationCode,
  } = data;

  const classes = useCardStyles();

  return (
    <div className={classes.card}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container xs={12}>
            <Grid item xs={12} className={classes.pos}>
              <Button component={Link} to="/">
                <img src="2.png" alt="img" style={{ width: '210px', height: '150px', borderRadius: '30px' }} />
              </Button>

            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title} gutterBottom>
                {roomId}
              </Typography>
              <Typography className={classes.pos} variant="h6">
                {userId}
              </Typography>
              <Typography variant="h6">
                {title}
              </Typography>
              <Typography variant="h6">
                {content}
              </Typography>
              <Typography variant="h5" component="p" className={classes.priceText}>
                {createdAt}
              </Typography>
              <Typography variant="h6" component="p" className={classes.rightText}>
                {warrentyPrice}
              </Typography>
              <Typography variant="h6" component="p" className={classes.rightText}>
                {locationCode}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
