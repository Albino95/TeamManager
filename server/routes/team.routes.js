const TeamController = require('../controller/team.controller');

module.exports = (app) => {
    app.get('/api/players', TeamController.getAllPlayers);
    app.post('/api/players', TeamController.addPlayers);
    app.delete('/api/players/:id', TeamController.deletePlayers);
}

