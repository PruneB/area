import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import Authentification from './components/Auth';
import styles from './styles';

export default withStyles(styles)(withCookies(Authentification));
