const express = require('express');
const colors = require('../database/colors.json')

const router = express.Router()

router.get('/',(req,res) => {
    res.send(colors)
})

module.exports = router