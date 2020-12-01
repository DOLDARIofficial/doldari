import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

interface item {
    title: string;
    content: string;
    price: number;
}

interface dataprops {
    data: item[];
}

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',

  },
  grid: {
    marginLeft: '30px',
    alignContent: 'center',
    marginTop: 30,
  },
  img: {
    width: 180,
  },
}));

export default function ItemSet(ItemData: dataprops): JSX.Element {
  const classes = useStyles();
  const { data } = ItemData;

  return (
    <>
      <div>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs={3} component={Link} to="/rooms/Roomdetail">
            <img className={classes.img} alt="complex" src="2.png" />
            <Typography>
              {data[0].title}
            </Typography>
            <Typography>
              {data[0].content}
            </Typography>
            <Typography>
              {data[0].price}
            </Typography>
          </Grid>
          <Grid item xs={3} component={Link} to="/rooms/Roomdetail">
            <img className={classes.img} alt="complex" src="2.png" />
            <Typography>
              {data[1].title}
            </Typography>
            <Typography>
              {data[1].content}
            </Typography>
            <Typography>
              {data[1].price}
            </Typography>
          </Grid>
          <Grid item xs={3} component={Link} to="/rooms/Roomdetail">
            <img className={classes.img} alt="complex" src="2.png" />
            <Typography>
              {data[2].title}
            </Typography>
            <Typography>
              {data[2].content}
            </Typography>
            <Typography>
              {data[2].price}
            </Typography>
          </Grid>
          <Grid item xs={3} component={Link} to="/rooms/Roomdetail">
            <img className={classes.img} alt="complex" src="2.png" />
            <Typography>
              {data[1].title}
            </Typography>
            <Typography>
              {data[1].content}
            </Typography>
            <Typography>
              {data[1].price}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
