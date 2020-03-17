import React, { Component } from 'react'
import './Product.scss'
import ProductSection from './ProductSection'

export default class Product extends Component {
    render() {
        return (
            <div>
                <ProductSection />
                <ProductSection />
                <ProductSection />
                <ProductSection />
                <ProductSection />
                <ProductSection />
            </div>
        )
    }
}
