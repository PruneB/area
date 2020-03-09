import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import MoviePopular from './components/MoviePopular';
import styles from './styles';

export default withStyles(styles)(withCookies(MoviePopular));
