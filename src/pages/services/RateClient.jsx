import React, { Component } from "react";

class RateClient extends Component {
    constructor(props) {
        super(props);


        this.state = {

        };
    }

    componentDidMount() {
        //get data from the store when the first render

    }

    render() {
        if (this.props.level) {
            return (
                <div>
                    <img src="https://cache.hbfiles.com/assets/pro-search/badges/pro_premium_icon-5fba0cbd14c4d40f1795ef5397020d56.png" alt="" width="10%" />{` ${this.props.level}`}
                </div>
            );
        }
        else return (<div></div>);
    }
}

export default RateClient;
