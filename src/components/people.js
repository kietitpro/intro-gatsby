import React from "react"

import styles from "../styles/bio.module.css"

// Below, you can use the "styles" variable followed by the class name
// We are also passing props to setup a stand-alone component to reuse
const People = (props) => {
    return (
        <div className={styles.user}>
            <img className={styles.avatar} src={props.avatar} alt=""/>
            <div className={styles.description}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.exerpt}>{props.exerpt}</p>
            </div>
        </div>
    )
}

export default People