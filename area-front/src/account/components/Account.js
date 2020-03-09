import React from "react";
import PropTypes from "prop-types";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import background from '../multimedia/background2.png'


class Account extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {email: '', pwd: '', cpwd: ''}
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleChangeCpwd = this.handleChangeCpwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePwd(event) {
        this.setState({pwd: event.target.value});
    }

    handleChangeCpwd(event) {
        this.setState({cpwd: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.cpwd !== this.state.pwd) {
            alert('Password confirmation is not the same')
        }
        else {
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
            .then(data => { if(data.status === 200){ alert('Ce compte existe déjà');} 
            else {
                fetch('https://0.0.0.0:5001/users/create', {
                                method: 'post',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({email: this.state.email, password: this.state.pwd})
                                })
                                .then(res => console.log(res))
                                .then(this.props.history.push('/')); }
                        })
            event.preventDefault();
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <style>{'body { background-color: #f5f4ec; }'}</style>
                    <img src={background}alt="background create account"></img>
                    <div className={classes.paper}>
                        <Typography className={classes.name}>
                            ARTIUM
                    </Typography>
                        <Avatar className={classes.avatar}>
                        </Avatar>
                        <Typography component="h1" variant="h5" className={classes.fontFamily}>
                            Créez un compte
                             </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="pseudo"
                                label="Pseudo"
                                type="pseudo"
                                id="pseudo"
                                autoComplete="pseudo"
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
                                id="email"
                                label="Adresse email"
                                name="email"
                                autoComplete="email"
                                value={this.state.email} 
                                onChange={this.handleChangeEmail}
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
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirm-password"
                                label="Confirmez votre mot de passe"
                                type="password"
                                id="confirm-password"
                                autoComplete="current-password"
                                value={this.state.cpwd} 
                                onChange={this.handleChangeCpwd}
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
                                Créer mon compte
                                </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Account;
