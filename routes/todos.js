const { Router } = require('express')              // import router from express
const router = Router()                            // create router
const Todo = require('../models/Todo')             // import todo model


router.get('/', async (req, res) => {                  // create / route
  const todos = await Todo.find({}).lean()             // get todo list
  res.render('index', {
    'title': 'Todos list',
    'isIndex': true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    'title': 'Create todo',
    'isCreate': true
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title                              // get title from request body browser
  })
  await todo.save()
  res.redirect('/')
})


router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)         // get current todo by id
  todo.completed = !!req.body.completed                 // change param
  await todo.save()

  res.redirect('/')
})
module.exports = router






