import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import ShowPopular from './components/ShowPopular';
import styles from './styles';

export default withStyles(styles)(withCookies(ShowPopular));
