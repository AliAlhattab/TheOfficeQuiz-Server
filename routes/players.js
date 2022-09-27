const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js').development);

router.post('/', (req, res) => {

    const {name} = req.body

    knex('players')
        .insert({name: name})
        .then(() => {
            res.status(201).send({
                success: true,
                message: 'User has successfully been created'
            });
        })
        .catch(() => {
            res.status(400).send({
                success: false,
                message:'User was unsuccessful'
            })
        })
        
        

})

module.exports = router;