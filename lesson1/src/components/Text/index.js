import React from "react";
import styles from './text.module.css'; 
/* import React, {createElement} from "react"; */

export const Message= (props) => {
    /* createElement(props.tag || 'div') */
    let className =[styles.textColor]
    return (
        <div className={className}>
        {props.content}
        {props.children}
        </div>
    )
}