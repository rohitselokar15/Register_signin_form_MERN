const express = require("express");
const bodyParser = require("body-parser");
const { todo } = require("node:test");

const app = express();
const port = 8000;

app.use(bodyParser.json());

let todos = [
  {
    id:1,
    text:'Task 1'
  },
]

app.route('/')
  .get((req,res)=>{
    res.json(todos);
  })
  .post((req,res)=>{
    const {text} = req.body;
    const newTodo = {id: todos.length + 1, text};
    todos.push(newTodo); 
    res.status(201).json(newTodo);
  })
  .put((req,res)=>{
    const {id} = req.body;
    const updatesText = req.body.text;

    const todoUpdate = todos.find(todo => todo.id === id);
    if(todoUpdate){
      todoUpdate.text = updatesText;
      res.json(todoUpdate);
    }
    else{
      res.status(404).json({error:"To Do not found"});
    }
  })
  .delete((req,res)=>{
    const {id} = req.body;

    const todoIndex = todos.findIndex(todo => todo.id === id);
    if(todoIndex !== -1){
      const deletedTodo = todos.splice(todoIndex, 1)[0];
      res.json(deletedTodo);
    }
    else{
      res.status(404).json({error:'Todo not found'});
    }
  });

app.listen(port,()=>{
  console.log(`server is running port ${port}`);
})