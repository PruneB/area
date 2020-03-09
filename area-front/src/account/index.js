import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import Account from './components/Account';
import styles from './styles';

export default withStyles(styles)(withCookies(Account));
