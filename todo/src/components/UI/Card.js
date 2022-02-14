import React from 'react'
import './Card.module.css'
export default function Card(props) {

    const classes = 'card ' + props.className 

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
