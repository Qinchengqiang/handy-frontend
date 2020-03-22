import React, { Component } from 'react';
import './proFeatureItem.scss'


export default class ProFeatureItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: props.image,
            title: props.title,
            description: props.description
        }
    }
    render() {
        return (
            <div className="item-container">
                <img src={this.state.image} alt=""/>
                <h3 className="title"><b>{this.state.title}</b></h3>
                <p>{this.state.description}</p>
            </div>
        )
    }
}
