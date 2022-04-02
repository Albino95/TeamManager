const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    playerName: {
        type: String,
        minlength: [3, "There is no player with a 3 character name, please insert a true name"],
        required: [true, "Please enter a player name!"]
    },
    preferredPosition: {
        type: String,
        enum: [
            "Forward",
            "Midfilder",
            "Goalkeeper",
            "Left Full Back",
            "Right Full Back",
            "Center Back",
            "Holding Midfielder",
            "Attacking Midfielder",
            "Striker",
    ],
            
    }
}, {timestamps:true})

const Team = mongoose.model("Team", TeamSchema)

module.exports = Team;