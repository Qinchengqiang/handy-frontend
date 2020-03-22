import React, { Component } from "react"
import './furnitureAssembly.scss'
// import { link } from "fs-extra"

// const withNumberHandler = (key)=>(WrappedComponent)=>{
//     return class extends React {
//         state = {0}
//     }
// }

const keyArr = ["small", "medium", "large"]



class FurnitureCounter extends Component {
    state = {
        small: 0,
        medium: 0,
        large: 0,
    }
    handleIncrease = (name) => {
        this.setState({
            [name]: this.state[name] + 1
        })
    }
    handleDecrease = (name) => {
        if (this.state[name] >= 1) {
            this.setState({
                [name]: this.state[name] - 1
            })
        }
    }

    render() {
        const rst = keyArr.map((elem, index) => {
            const keyName = keyArr[index];
            return (
                <li className="assembly-form_item-list" key={elem + index}>
                    <div onClick={() => this.handleDecrease(keyName)} className="assembly-form_item-list_button" role="button">-</div>
                    <div className="assembly-form_item-list-description">{this.state[keyName] + " " + elem} furniture</div>
                    <div onClick={() => { this.handleIncrease(keyName) }} className="assembly-form_item-list_button" role="button">+</div>
                </li>)
        })
        return (<ul className="assembly-form_item-list-container">
            {rst}
        </ul>)
    }
}

export default FurnitureCounter;