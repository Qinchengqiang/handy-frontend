import React, { Component } from "react";
import './customer.scss'
export default class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: props.avatar,
      username: props.username,
      brief: props.brief
    };
  }

  render() {
    return (
      <div className="customer">
        <div className="avatar-container">
          <img src={this.state.avatar} alt="" />
        </div>
        <div className="name-brief">
          <h3>{this.state.username}</h3>
          <p>{this.state.brief}</p>
        </div>
      </div>
    );
  }
}
