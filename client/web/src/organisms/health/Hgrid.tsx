import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

interface item {
  title: string;
  gps: string;
  period: string;
  price: number;
}

interface dataprops {
  data: item[];
}
// data.map((v: data)=>{v.title})
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
  y_img: {
    position: 'absolute',
    bottom: 25,
    right: 10,
    width: 50,
  },
  pricetag: {
    color: '#F5A1A1',
    fontSize: '28px',
    textAlign: 'right',
    fontWeight: 'bold',
    float: 'right',

  },
  pricetagw: {
    color: '#F5A1A1',
    fontSize: '28px',
    textAlign: 'right',
    fontWeight: 'bold',
    float: 'right',
  },
  title: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 230,

  },

}));

export default function Hgrid(ItemData: dataprops): JSX.Element {
  const classes = useStyles();
  const { data } = ItemData;

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Button size="medium" component={Link} to="/heath_management/detail">
                  <Typography className={classes.title} gutterBottom variant="h6">
                    {data[0].title}
                  </Typography>
                </Button>

                <Grid container className={classes.root} spacing={2}>
                  <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={2}>
                      <Grid item>
                        <Typography color="textSecondary">위치</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{data[0].gps}</Typography>
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
                        <Typography>{data[0].period}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image} component={Link} to="/heath_management/detail">
              <img className={classes.img} alt="complex" src="2.png" />
              <img className={classes.y_img} alt="양도금포함" src="yang.png" />
            </ButtonBase>

            <Grid item>
              <Typography className={classes.pricetag}>
                {data[0].price}
                <Typography className={classes.pricetagw}>원</Typography>
              </Typography>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
