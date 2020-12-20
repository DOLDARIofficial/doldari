import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles((theme) => ({
  card: {
    padding: 40,
  },
  root: {
    minWidth: 275,
    width: '550px',
    height: '270px',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontWeight: 'bold',
  },
  pos: {
    flexDirection: 'row-reverse',
  },
  priceText: {
    textAlign: 'right',
    alignItems: 'right',
    fontWeight: 'bold',
    color: theme.palette.info.light,
  },
  rightText: {
    textAlign: 'right',
    alignItems: 'right',
    fontWeight: 'bold',
  },
}));

export default useCardStyles;
