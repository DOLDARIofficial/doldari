import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#ffffff',

    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: '40px',
    '& > *': {
      margin: theme.spacing(40),
      width: theme.spacing(50),
      height: theme.spacing(10),
    },
  },
  font: {
    fontSize: 30,

  },
  bluefont: {
    color: '#87abf5',
  },
  confirmButton: {
    backgroundColor: '#f5a1a1',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
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
    width: '30%',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    zIndex: 10000,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  paperAlgin: {
    margin: '50px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

}));

export default styles;
