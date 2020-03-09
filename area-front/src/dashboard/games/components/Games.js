import React from "react";
import PropTypes from "prop-types";

import { TextField, Button, List, ListItem } from '@material-ui/core';


class Games extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            event: "",
            game: undefined,
            check: false,
        };
    }

    handleOnClick = () => {
        const url = `https://0.0.0.0:5001/igdb/search?search=` + this.state.search + `&field=*`;

        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
                    this.setState({
                        datas: results
                    });
                },
            )
        this.setState({
            check: false
        });
    }

    handleOnChange = event =>
    {
        this.setState({
            search: event.currentTarget.value,
        });
    }

    handleOnClickGame = event => {
        const url = `https://0.0.0.0:5001/igdb/games/` + event.currentTarget.value;

        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
                    this.setState({
                        games: results
                    });
                },
            )
        this.setState({
            check: true
        });
    }

    render() {
        const { classes } = this.props;
        const { datas, games, check } = this.state;

        return (
            <div>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                <TextField id="standard-basic" label="" onChange={this.handleOnChange}/>
                <Button onClick={this.handleOnClick}>Rechercher</Button>
                {!check ? datas ? datas.map(row => {
                    return (
                        <div>
                            <List>
                                    <ListItem>
                                    <Button onClick={this.handleOnClickGame}value={row.gameId}>{row.name}</Button>
                                    </ListItem>
                            </List>
                        </div>
                    );
                }) : "" : 
                games ? 
                <div>
                            <div className={classes.title}>Titre : {games.name}</div>
                            <div className={classes.title}>Genre : {games.genresNames}</div>
                            <div className={classes.title}>Plateforme : {games.platformsNames}</div> 
                </div>
                 :"Attendez notre réponse :)"}
                </div>
        );
    }
}

export default Games;