const router = require('express').Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

router.get('/:index', (req, res) =>{
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router

