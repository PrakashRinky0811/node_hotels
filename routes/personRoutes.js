const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async (req, res) =>{
  try{
    const data = req.body
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }catch(error){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
  
})

//Get method
router.get('/', async(req,res) =>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})

//Work ty;pe api
  router.get('/:workType', async (req,res) =>{
      try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
          const response = await Person.find({work:workType});
          console.log('reasponse fetched');
          res.status(200).json(response);
        }else{
          res.status(404).json({error: 'Invalid work type'});
        }
      } catch(error){
          console.log(error);
          res.status(500).json({error: 'Internal Server Error'});
      }
  })

//update person
router.put('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new:true, //return the updated document
            runValidators: true, //Run Mongoose validation
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
    }
})

//delete Api
router.delete('/:id', async(req,res) =>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'person delete successfully'});
    }
    catch(err){
        console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
    }
})

  module.exports = router;
