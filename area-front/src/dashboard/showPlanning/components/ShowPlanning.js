import React from "react";
import PropTypes from "prop-types";

import {} from '@material-ui/core';


class ShowPlanning extends React.Component {
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

        const url = "https://0.0.0.0:5001/betaserie/planning/";

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
        const { datas } = this.state;

        return (
            <div>
                <style>{'body { background-color: #f5f4ec; }'}</style>
                {datas.episodes ? datas.episodes.map(row => {
                    return (
                        <div>
                            {row.title}
                        </div>
                    );
                }) : "" }
                </div>
        );
    }
}

export default ShowPlanning;


