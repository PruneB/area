import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import ShowNews from './components/ShowNews';
import styles from './styles';

export default withStyles(styles)(withCookies(ShowNews));
