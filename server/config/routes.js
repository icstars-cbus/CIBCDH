var users = require('../controllers/users');

module.exports = function(app){
    app.get('/', (req, res) => users.index(req, res));
    app.get('/game', (req, res) => users.game(req, res));
    app.get('/register', (req, res) => users.register(req,res));
    app.post('/create', (req, res) => users.create(req,res));
    app.post('/login', (req,res) => users.login(req,res));
    app.get('/logout', (req,res) => users.logout(req,res));
}