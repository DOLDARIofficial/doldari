import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

function TabPanel(props: any) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '##87abf5',
    alignContent: 'center',
    alignItems: 'center',

  },
  tab: {
    fontSize: 25,
    color: '#FFFF',
    mefinLeft: 100,
  },

}));

export default function Tabbar(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <div style={{ justifyContent: 'space' }}>
            <Tab label="자취방/쉐어하우스" component={Link} to="/rooms" {...a11yProps(0)} className={classes.tab} />
            <Tab disabled />
            <Tab disabled />
            <Tab label="헬스장 게시판" component={Link} to="/health_management" {...a11yProps(1)} className={classes.tab} />
            <Tab disabled />
            <Tab disabled />
            <Tab label="책방" component={Link} to="/books" {...a11yProps(2)} className={classes.tab} />
          </div>
        </Tabs>
      </AppBar>

    </div>
  );
}
