import HandyFeature from './HandyFeature'
import React from 'react'
import './handyFeature.scss'

export default function HandyFeatureAssembly (props) {
    return (
        <div className="handy-feature-page_layout">
            <div className="handy-feature-page_title">The most Reliable Name in Furniture Assembly</div>
            <HandyFeature/>
        </div>
    )
}
