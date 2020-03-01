import React, { Component } from 'react';
import styles from './apply.module.css';
import ApplyProForm from '../../components/applyForm';
import ProHeader from '../../assets/images/apply/pro-header.png';
import ProFeature from '../../components/proFeature';
import Comment from '../../components/comment';
import Requirement from '../../components/requirement'

export default class Apply extends Component {
    render() {
        return (
            <div className={styles.apply}>
                <div className={styles.pro_header}>
                    <div className={styles.pro_header_text}>
                        <h1>Start earning money this week!</h1>
                    </div>
                    <div className={styles.pro_content_container}>
                        <div className={styles.pro_content_wrapper}>
                            <p className={styles.pro_header_subtext_mobile}>
                                Gain access to hundreds of jobs in your city and build your own schedule.
                            </p>
                        </div>
                        <ApplyProForm />
                        <img src={ProHeader} alt=""/>
                    </div>
                </div>
                <ProFeature />
                <Comment />
                <Requirement />
            </div>
        )
    }
}
