import HandyFeature from './HandyFeature'
import React from 'react'
import './handyFeature.scss'

export default function HandyFeatureAssembly (props) {
    return (
        <div className="handy-feature--page__layout">
            <div className="handy-feature--page__title">The most Reliable Name in Furniture Assembly</div>
            <HandyFeature/>
        </div>
    )
}
