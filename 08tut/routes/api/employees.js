const express = require('express')
const { request } = require('http')
const router = express.Router()
const data = {}
data.emlpoyees = require('../../data/employees.json')

router.route('/')
    .get((req, res) => {
        res.json(data.emlpoyees)
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    })

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id })
    })

module.exports = router

