const Team = require('../models/team.models');

module.exports = {
    getAllPlayers: ((req, res) => {
        Team.find({})
            .then((allPlayers) => {
                console.log(allPlayers)
                res.json(allPlayers)
            })
            .catch((err) => {
                console.log(err);
                res.json(`error for getting all players is : ${err}`)
            })
    }),
    addPlayers: ((req, res) => {
        Team.create(req.body)
            .then((newPlayer) => {
                console.log(newPlayer);
                res.json(newPlayer);
            })
            .catch((err) => {
                console.log(err);
                res.json(`There was this error with creating a new Player : ${err}`)
            })
    })
}