const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    playerName: {
        type: String,
        minlength: [3, "There is no player with a 3 character name, please insert a true name"]
    },
    preferredPosition: {
        enum: "Forward"
            
    }
})