const express = require('express');
const router = express.Router();
const AssignTask = require("../model/assignTask");

router.post("/assigntask", async (req,res)=>{
    console.log(req.body)
    const { name, email, phone} = req.body;
    const status = 1;
    if (!name || !email|| !phone  ) {
        return res.status(422).json({ erorr: "Please filled the fild properly" });
    }
     try {
        const task = new AssignTask({name, email, phone, status});
        await task.save();

        res.status(201).json({ message: "Add Succefully" });

    } catch (err) {
        console.log(err);
    }
}) 

router.get('/tasklist', async (req, res) => {
    try {
        const sort = { name: -1 };  
        const tasks = await AssignTask.find({}).sort(sort);
    } catch (err) {
        res.status(400).send(err)  
    }
});     

router.get('/tasklistlike', async (req, res) => {
    try {
        //const sort = { name: -1 };  
        //const tasks = await AssignTask.find({}).sort(sort);
        
        const tasks = await AssignTask.find( { 'name' : /^Ra/} ).limit(5);
        res.send(tasks)
    } catch (err) {
        res.status(400).send(err)
    }   
}); 

+
router.get('/tasklist/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await AssignTask.findById({_id}) 
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
});


router.patch('/task/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await AssignTask.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.patch('/taskupdate/update/:id', async (req, res) => {
    
    try {
        const _id = req.params.id;
        const task = await AssignTask.findByIdAndUpdate(_id, req.body, {
            new: true, status : 0
        } )
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});  

router.delete('/tasklist/delete/:id', async (req, res) => {
    try {
       
        const task = await AssignTask.findByIdAndDelete(req.params.id) 
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/tasklistall/delete', async (req, res) => {
    try {
       
        const task = await AssignTask.deleteMany(req.params.id) 
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router;
