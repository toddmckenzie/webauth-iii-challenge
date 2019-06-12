const router = require('express').Router();
const db = require('../database/dbConfig.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', (req,res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    db('users')
        .insert(user)
        .then(saved => {
            res.status(201).json(savaed)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


router.post('/login', (req, res) => {
    let { username, password } = req.body;

    db('users')
    .where({ id })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);//generates token!!!
            res.status(200).json({ 
                message: `Welcome ${user.username}`,
                token
            })
        } else {
            res.status(401).json({ message: 'Invalid Credentials.'})
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});


function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '8h',
    }
    const secret = 'Here is my secret to keep secret....';
    
    return jwt.sign(paylaod, secret, options)
}


module.exports = router;