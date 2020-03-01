import React, { Component } from 'react'

export default class Customer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             avatar: props.avatar,
             username: props.username,
             brief: props.brief
        }
    }
    
    render() {
        return (
            <div>
                <img src={this.state.avatar} alt=""/>
                <h3>{this.state.username}</h3>
                <p>{this.state.brief}</p>
            </div>
        )
    }
}
