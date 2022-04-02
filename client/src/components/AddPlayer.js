import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from "./style.module.css"


const AddPlayer = (props) => {

    const [playerName, setPlayerName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("")

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/players', {
            playerName,
            preferredPosition
        })
        .then((res) => {
            console.log(`you ave added the player ${playerName}`)
            navigate('/')
        })
        .catch((err) => {
            console.log(`there was this problem with adding ${playerName}: ${err}`)
        })
        
    }

    return (
        <div>
            <Header />

            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Insert player name:</label>
                    <input type='text' value = {playerName} onChange = {(e) => setPlayerName(e.target.value)} />
                </div>

                <div>
                    <label>Select your players preferred position</label>
                    <select value={preferredPosition} onChange={(e) => setPreferredPosition(e.target.value)}>
                        <option defaultChecked>please select an option</option>
                        <option>Forward</option>
                        <option>Midfilder</option>
                        <option>Goalkeeper</option>
                        <option>Left Full Back</option>
                        <option>Right Full Back</option>
                        <option>Center Back</option>
                        <option>Holding Midfielder</option>
                        <option>Attacking Midfielder</option>
                        <option>Striker</option>
                    </select>
                </div>

                <button type='submit' className={styles.add}>Add Player</button>

            </form>
        </div>
    )
}

export default AddPlayer;