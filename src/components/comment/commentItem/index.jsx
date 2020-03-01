import React, { Component } from 'react';
import Customer from './customer';
import styles from './commentItem.module.css';


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
            <div>
                <p>{this.state.statement}</p>
                <Customer avatar={this.state.customer.avatar} 
                username={this.state.customer.username}
                brief={this.state.customer.brief}
                />
            </div>
        )
    }
}
