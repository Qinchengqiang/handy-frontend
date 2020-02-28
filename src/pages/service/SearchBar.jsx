import React, { Component } from "react";
import "../../fontawesome-free-5.12.1-web/js/all"

// import Nav from "../../components/nav/Nav";
import "./searchBar.scss";

class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',

        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        //get data from the store when the first render
    }


    handleChange(e) {
        // console.log(e.target.value);

        // set state Tag to currentValue

        this.setState({
            // [..] 就可以不用写 username 和 password 两遍了
            text: e.target.value,
            
        })

        console.log('Change');
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({

        // })

        console.log('Submit');
        console.log(this.state);

    }

  render() {
    return (

        <div className="search__container">
            <div className="search__banner">
                <h2>Choose a service to get started.</h2>
                <div className="search__bar">
                    <input type="text"
                        placeholder={`  Search for a service (e.g. "cleaning")`}
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button type="search"
                        value={this.state.text}
                        onClick={this.handleSubmit.bind(this)}
                    ><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
  }
}

export default SearchBar;
