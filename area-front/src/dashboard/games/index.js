import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import Games from './components/Games';
import styles from './styles';

export default withStyles(styles)(withCookies(Games));
