const express = require('express');
const data = require('../models/data');
const router = express.Router();

router.get('/', function(req, res){
  data.find({}).exec(function(error, data){
    if(error)
      res.send(error);
    res.send({data: data})
  });
});

router.get('/:id', function(req, res){

})

router.post('/', function(req, res){
  data.create(req.body).then(function(error, data){
    if (error)
      res.send(error);
    res.send({data:data})
  });
});

router.put('/:id', function(req, res){
  data.findByIdAndUpdate({_id:req.params.id},req.body).then(function(error, data){
    data.findOne({_id: req.params.id}).then(function(error, data){
      if(error)
        res.send(error)
      res.send({data: data})
    });
  });
});

router.delete('/:id', function(req, res){
  data.findByIdAndRemove({_id:req.params.id}).then(function(error,data){
    if(error)
      res.send(error)
    res.send({data: data})
  });
});

module.exports = router;
