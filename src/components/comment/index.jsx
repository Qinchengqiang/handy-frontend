import React, { Component } from 'react'
import CommentItem from './commentItem'
import './comment.scss'

const comments = [
    {statement:"I moved from an agency to Handy last month. They pay better, have plenty of jobs, and I love the flexibility!", customer:{avatar:"https://cache.hbfiles.com/assets/apply/testimonial-joy-f76e47207254f7900c0a0e68c5069bac.jpg", username:"JOY", brief:"Cleaner, New York"}},
    {statement:"What I really like is that I can take a couple of jobs a day, and I don’t have to deal with the headache of finding my own customers and dealing with payments.", customer:{avatar:"https://cache.hbfiles.com/assets/apply/testimonial-igor-708493f082acfd074cf4f43fbf0428bb.jpg", username:"IHOR", brief:"Handyman, Boston"}}
]
export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h2>What our professionals are saying</h2>
                {comments.map((comment, i) => (
                    <CommentItem key={i}
                    statement={comment.statement}
                    customer={comment.customer}
                    />
                ))}
            </div>
        )
    }
}
