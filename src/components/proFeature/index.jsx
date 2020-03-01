import React, { Component } from 'react';
import ProFeatureItem from './proFeatureItem';
import styles from './proFeature.module.css';

const features = [
    {image: "https://cache.hbfiles.com/assets/apply/icon-earn-bbe84715ecee99f978cd0ae76f981a81.png", title:"GREAT PAY", description: "Make up to $22/hour/job as a cleaner or $45/hour/job as a handyman. Our top professionals make more than $1,000 a week."},
    {image: "https://cache.hbfiles.com/assets/apply/icon-schedule-733749b72750a500a80711899d8b763a.png", title:"FLEXIBLE SCHEDULE", description: "You choose when you want to work and how much. Build a full schedule of your customers or simply add a few jobs on the side."},
    {image: "https://cache.hbfiles.com/assets/apply/icon-payment-536ed5767b28ca38014a90d914364121.png", title:"EASY PAYMENTS", description: "No more tracking down your customers for payments. Your payments are direct deposited into your bank account soon after the job is complete."}
]

export default class ProFeature extends Component {
    render() {
        return (
            <div className={styles.container}>
                {features.map((feature, i) => (
                    <ProFeatureItem key={i} 
                                    image={feature.image} 
                                    title={feature.title} 
                                    description={feature.description}
                    />
                ))}
            </div>
        )
    }
}
