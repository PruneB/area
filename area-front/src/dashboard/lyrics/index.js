import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import Lyrics from './components/Lyrics';
import styles from './styles';

export default withStyles(styles)(withCookies(Lyrics));
