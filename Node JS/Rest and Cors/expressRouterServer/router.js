const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.json({hello: 'this is written in a router'})
})

router.post('/', (req, res)=> {
  res.json({hello: 'this is'})
})

module.exports = router;