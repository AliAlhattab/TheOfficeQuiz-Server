const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js').development);

router.post('/', (req, res) => {

    const {name} = req.body

    knex('players')
        .insert({
            name: name,
        })
        .then((player) => {
            res.status(201).json({id: player})
        })
        .catch(() => {
            res.status(400).send({
                success: false,
                message:'User was unsuccessful'
            })
        })
        
        

})

router.get('/', (req, res) => {
    knex('players')
    .select(
        'id',
        'name',
        'score'
    )
    .then((player) => {
        res.status(200).json(player)
    })
    .catch((err) => {
        res.status(404).json({ message: 'Error getting player'})
    })
})

router.put('/:id', (req, res) => {

    const {score} = req.body
    const {id} = req.params;

    knex('players')
    .update({
        score: score
    })
    .where({id: id})
    .then((player) => {
        res.status(200).json(player)
    })
    .catch((err) => {
        res.status(404).json({ message: 'Error getting player'})
    })

})

module.exports = router;