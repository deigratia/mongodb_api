const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
  res.send('welcome to api')
})

module.exports = router;
