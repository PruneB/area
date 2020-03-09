import React from "react";
import PropTypes from "prop-types";

import {Grid, Typography, Button} from '@material-ui/core';

import MoviePopular from '../moviePopular';
import Games from '../games';
import SearchMovie from "../searchMovie";
import ShowPopular from "../showPopular";
import ShowPlanning from "../showPlanning";
import ShowNews from "../showNews";
import Lyrics from "../lyrics";

import artium from '../../authentification/multimedia/background2.png'


class Dashboard extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.cookies.cookies.params,
            list : 0,
        }
    }

    strToTabCookie = (cookie) => {
        var test = [];
        cookie ? test = cookie.split(',') : test = [null];
        return test;
    }

    handleButton = (event) => {
        if (event.currentTarget.value === "Films populaires")
            this.setState({
                list : 1,
            })
        if (event.currentTarget.value === "Planning séries")
            this.setState({
                list: 2,
            })        
            if (event.currentTarget.value === "Séries populaires")
                this.setState({
                    list: 3,
                })
        if (event.currentTarget.value === "Rechercher un jeu vidéo")
            this.setState({
                list: 4,
            })       
        if (event.currentTarget.value === "Rechercher un film")
            this.setState({
                list: 5,
            })       
        if (event.currentTarget.value === "News séries")
            this.setState({
                list: 6,
            })
        if (event.currentTarget.value === "Paroles de musiques")
            this.setState({
                list: 7,
            })          
        }


    render() {
        const { classes } = this.props;

        return (
            <div>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                <Grid className={classes.title}>
                <Typography className={classes.name}>
                    ARTIUM
                    </Typography>
                    <Button
                        href="params"
                    >
                       Paramètres
                </Button>
                    <Button
                        href="/"
                    >
                        Déconnexion
                </Button>               
                </Grid>
                <Grid container>
                <Grid item xs={2} className={classes.list}>
                    <Typography className={classes.listName}>
                        Sélections
                         <div>
                                {this.strToTabCookie(this.state.checked).map(row => {
                                    return (
                                        <Button onClick={this.handleButton} value={row} className={classes.button}>
                                            {row}
                                            </Button>
                            )})}
                            </div>
                    </Typography>
                </Grid>
                <Grid item xs={10} >
                        {this.state.list === 0 && <div className={classes.welcome}>Bienvenue</div>}
                        {this.state.list === 0 && <img alt={"bienvenue"} src={artium}className={classes.image}></img>}
                        {this.state.list === 1 && <MoviePopular />}
                        {this.state.list === 2 && <ShowPlanning />}
                        {this.state.list === 3 && <ShowPopular />}
                        {this.state.list === 4 && <Games />}
                        {this.state.list === 5 && <SearchMovie />}
                        {this.state.list === 6 && <ShowNews />}
                        {this.state.list === 7 && <Lyrics />}
                    </Grid>
                </Grid>
                </div>
        );
    }
}

export default Dashboard;