import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"
import Header from './Header'




const AllTeams = () => {

    const [players, setPlayers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then((allPlayers) => {
                console.log(allPlayers);
                console.log("response for all players : " + allPlayers.data);
                setPlayers(allPlayers.data)
                console.log(players)

            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
            })
    },[])

    const handleClick = (idFromBelow) => {

        axios.delete(`http://localhost:8000/api/players/${idFromBelow}`)
            .then((deleteThisPlayer) => {
                console.log(`${deleteThisPlayer} was deleted succesfully`)
                setPlayers(players.filter((player, index) => player._id !== idFromBelow))
            })
            .catch((err) => {
                console.log(`you cannot delete this player from the front end because: ${err}`)
            })
    }



    return (
        <div>
            <Header />
            <div>
                <Link to = "/">List All Players</Link>
                <Link to = '/new'>Add new player</Link>
            </div>
                {
                    players.map((player, index) => (
                        <div key={index} className={styles.list}>
                            <p>{player.playerName}</p> 
                            <p>{player.preferredPosition}</p>
                            <button className={styles.delete} onClick={() => handleClick(player._id)}>Delete</button>
                        </div>
                    ))
                }
            
        </div>
    )
}

export default AllTeams;