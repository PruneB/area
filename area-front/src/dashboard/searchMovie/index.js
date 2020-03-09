import { withCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core';

import SearchMovie from './components/SearchMovie';
import styles from './styles';

export default withStyles(styles)(withCookies(SearchMovie));
