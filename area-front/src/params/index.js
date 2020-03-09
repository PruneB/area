import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import Params from './components/Params';
import styles from './styles';

export default withStyles(styles)(withCookies(Params));
