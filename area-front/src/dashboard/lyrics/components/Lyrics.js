import React from "react";
import PropTypes from "prop-types";

import { TextField, Button } from '@material-ui/core';
import { Table, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';



class Lyrics extends React.Component {
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
        const url = `https://0.0.0.0:5001/genius/search?q=` + this.state.search;

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

    render() {
        const { classes } = this.props;
        const { datas, } = this.state;

        return (
            <div>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                <TextField id="standard-basic" label="" onChange={this.handleOnChange}/>
                <Button onClick={this.handleOnClick}>Rechercher</Button>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableBody>
                            {datas.response ? 
                                    <TableRow key="oui">
                                        <TableCell component="th" scope="row">
                                        <img alt={datas.response.song.url} className={classes.image} src={datas.response.song.imageUrl}></img>
                                        </TableCell>
                                    <TableCell align="right" ><a href={datas.response.song.url}>Lien parole</a></TableCell>
                                    </TableRow>
                            : ""}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Lyrics;