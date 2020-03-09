import React from "react";
import PropTypes from "prop-types";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import music from '../multimedia/music.jpg'
import show from '../multimedia/show.jpg'
import game from '../multimedia/game.png'
import cinema from '../multimedia/cinema.jpg'


class Params extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container component="main" className={classes.root}>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                    <Typography className={classes.name}>
                        Personnalisez votre espace
                    </Typography>
                <Grid item xs={12}>
                        <img id="Music" alt="music"
                            src={music} className={classes.musicLogo}></img>
                        <img id="Show" alt="show"
                            src={show} className={classes.showLogo}></img>
                        <img id="Game" alt="game"
                            src={game} className={classes.gameLogo}></img>
                        <img id="Cinema" alt="cinema"
                            src={cinema} className={classes.cinemaLogo}></img>
                    </Grid>
                <Grid item xs={12}>
                    <List className={classes.list}>
                    {["Paroles de musiques"].map(value => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem key={value} dense button onClick={this.props.handleToggle(value)} >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={this.props.cookies.cookies.params ? this.props.cookies.cookies.params.indexOf(value) !== -1 : this.props.state.checked.indexOf(value) !== -1 }
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value } className={classes.itemText} />
                            </ListItem>
                        );
                    })}
                </List>
                        <List className={classes.list1}>
                            {["Planning séries", "News séries", "Séries populaires"].map(value => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem key={value} dense button onClick={this.props.handleToggle(value)} >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={this.props.cookies.cookies.params ? this.props.cookies.cookies.params.indexOf(value) !== -1 : this.props.state.checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value} className={classes.itemText} />
                                    </ListItem>
                                );
                            })}
                        </List>
                        <List className={classes.list2}>
                            {["Rechercher un jeu vidéo"].map(value => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem key={value} dense button onClick={this.props.handleToggle(value)} >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={this.props.cookies.cookies.params ? this.props.cookies.cookies.params.indexOf(value) !== -1 : this.props.state.checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value} className={classes.itemText} />
                                    </ListItem>
                                );
                            })}
                        </List>
                        <List className={classes.list3}>
                            {["Films populaires", "Rechercher un film"].map(value => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem key={value} dense button onClick={this.props.handleToggle(value)} >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={this.props.cookies.cookies.params ? this.props.cookies.cookies.params.indexOf(value) !== -1 : this.props.state.checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value} className={classes.itemText} />
                                    </ListItem>
                                );
                            })}
                        </List>
                </Grid>
                    <Button href="dashboard" className={classes.button} >Valider</Button>
                   </Grid>
            </div>
        );
    }
}

export default Params;