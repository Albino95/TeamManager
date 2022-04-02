import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to = {'/'}>Manage players</Link>
            <Link to = "/status">Manage Player Status</Link>
        </header> 
    )
}

export default Header