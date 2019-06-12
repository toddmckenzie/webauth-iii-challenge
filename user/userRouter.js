const router = require('express').Router();
const db = require('../database/dbConfig.js')

const restricted = require('../auth/restricted.js');


router.get('/', restricted, (req, res) => {
    db('users')
    .select('id', 'username', 'password')
    .then(users => {
        res.json(users)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})



module.exports = router;