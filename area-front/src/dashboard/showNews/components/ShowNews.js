import React from "react";
import PropTypes from "prop-types";

import {Table, Paper, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';


class ShowNews extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            datas: [],
        };
    }

    componentDidMount() {

        const url = "https://0.0.0.0:5001/betaserie/news";

        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
                    this.setState({
                        isLoaded: true,
                        datas: results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { classes } = this.props;
        const { datas } = this.state;

        return (
            <div>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Lien de l'article</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas.news ? datas.news.map(row => {
                                return (
                                    <TableRow key={row.title}>
                                        <TableCell component="th" scope="row">
                                            <img alt={row.title} className={classes.image}src={row.pictureUrl}></img>
                                        </TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right" ><a href={row.url}>{row.title}</a></TableCell>
                                    </TableRow>
                                );
                            }) : "" }
                        </TableBody>
                    </Table>
                </Paper>
                </div>
        );
    }
}

export default ShowNews;