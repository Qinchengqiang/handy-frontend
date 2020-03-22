import React, { Component } from 'react';
import Customer from './customer';
import './commentItem.scss'


export default class CommentItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             statement: props.statement,
             customer: props.customer,
        }
    }
    
    render() {
        return (
            <div className="commentItem">
                <p>{this.state.statement}</p>
                <Customer avatar={this.state.customer.avatar} 
                username={this.state.customer.username}
                brief={this.state.customer.brief}
                />
            </div>
        )
    }
}
