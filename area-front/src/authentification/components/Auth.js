import React from "react";
import PropTypes from "prop-types";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import background from '../multimedia/background2.png'


class Auth extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {email: '', pwd: '', res: 0}
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePwd(event) {
        this.setState({pwd: event.target.value});
    }

    handleSubmit(event) {
        fetch('https://0.0.0.0:5001/users/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.pwd})
            })
            .then(res => { 
                return res
             }) 
            .then(data => { if(data.status === 200){this.props.history.push('/params');}
                            else { alert('Le nom d\'utilisateur ou le mot de passe est erroné'); }
                        })
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <style>{'body { background-color: #f5f4ec; }'}</style>
                    <img src={background} alt="background auth"></img>
                    <div className={classes.paper}>
                        <Typography className={classes.name}>
                            ARTIUM
                    </Typography>
                        <Avatar className={classes.avatar}>
                        </Avatar>
                        <Typography component="h1" variant="h5" className={classes.fontFamily}>
                            Authentifiez vous
                             </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Adresse email"
                                name="email"
                                autoComplete="email"
                                value={this.state.email} 
                                onChange={this.handleChangeMail}
                                autoFocus
                                InputProps={{
                                    classes: {
                                        root: classes.outlinedInput,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                    },
                                }}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.pwd} 
                                onChange={this.handleChangePwd}
                                InputProps={{
                                    classes: {
                                        root: classes.outlinedInput,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                                href="params"
                            >
                                Se connecter
            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Link href="account" variant="body2" className={classes.href}>
                                        {"Vous n'avez pas encore de compte ? Créez en un !"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Auth;
