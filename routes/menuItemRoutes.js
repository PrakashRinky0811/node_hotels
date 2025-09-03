const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//get menu
router.get('/', async(req,res) => {
  try{
    const data = await MenuItem.find();
    console.log('Menu data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log({error: 'Internal Server Error'})
  }
})

//Post menu
router.post('/', async(req, res) => {
  try{
    const data = req.body
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('menu data saved');
    res.status(200).json(response);
  }

  catch(error){
    console.log(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//comment added for testing purposes

module.exports = router;