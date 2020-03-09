import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import ShowPlanning from './components/ShowPlanning';
import styles from './styles';

export default withStyles(styles)(withCookies(ShowPlanning));
