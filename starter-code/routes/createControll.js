const express = require('express');
const createControll = express.Router();
const Place = require("../models/place");

createControll.get('/create', (req, res, next)=>{
  res.render('create');
})

createControll.post('/create', (req, res , next) =>{
  var name = req.body.name;
  var description = req.body.description;
  var coordinates = [Number(req.body.longitude), Number(req.body.latitude)];

  var newPlace = new Place({
    name,
    description,
    coordinates,
  })
 console.log(name, description, coordinates);

  newPlace.save((err)=>{
    if(err){
      res.redirect('/create');
      console.log('cannot save');
    } else {
      console.log('saved');
      res.redirect('/');
    }
    })
  // })
});
module.exports = createControll;
