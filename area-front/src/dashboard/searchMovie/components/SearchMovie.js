import React from "react";
import PropTypes from "prop-types";

import {TextField, Button} from '@material-ui/core';
import { Table, Paper, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';



class SearchMovie extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    handleOnClick = () => {
        const url = `https://0.0.0.0:5001/moviedatabase/search?q="` + this.state.search + `"&language=fr`;

        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
                    this.setState({
                        datas: results
                    });
                },
            )
    }

    handleOnChange = event => {
        this.setState({
            search: event.currentTarget.value,
        });
    }

    render() {
        const { classes } = this.props;
        const { datas } = this.state;

        return (
            <div>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                <TextField id="standard-basic" label="" onChange={this.handleOnChange} />
                <Button onClick={this.handleOnClick}>Rechercher</Button>
                      <Paper className={classes.root}>
                        <Table className={classes.table} >
                        <TableRow>
                            <TableHead>
                                        <TableCell className={classes.table1} >Film</TableCell>
                                        <TableCell className={classes.table1} align="right">Date de sortie</TableCell>
                                        <TableCell className={classes.table1} align="right">Nombre de votes</TableCell>
                                        <TableCell className={classes.table2} align="right">Résumé</TableCell>
                                        <TableCell className={classes.table1} align="right">Film tout public</TableCell>
                                </TableHead>
                            </TableRow>
                            {datas.results ? datas.results.map(row => {
                                return (
                                    <div>
                                        <TableBody>
                                        <TableRow key={row.title}>
                                            <TableCell className={classes.table1} component="th" scope="row" >
                                                <img alt={row.title} src={`http://image.tmdb.org/t/p/w185//` + row.poster_path}></img>
                                            </TableCell>
                                            <TableCell className={classes.table1} align="right">{row.release_date}</TableCell>
                                            <TableCell className={classes.table1} align="right">{row.vote_count}</TableCell>
                                            <TableCell className={classes.table2} align="right">{row.overview}</TableCell>
                                            <TableCell className={classes.table1} align="right">{row.adult ? "oui" : "non"}</TableCell>
                                        </TableRow>
                                                </TableBody>

                                    </div>
                                );
                            }) : ""}
                    </Table>
                </Paper>
                </div>
        );
    }
}

export default SearchMovie;