import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Link className={styles.headerelement} to = {'/'}>Manage players</Link>
            <Link to = "/status">Manage Player Status</Link>
        </header> 
    )
}

export default Header