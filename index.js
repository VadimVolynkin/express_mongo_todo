// https://www.youtube.com/watch?v=8bE_PBRriyU&list=PLqKQF2ojwm3nskLXLYIIAgoy2JoACR6eG&index=2
// need to change API MONGO BASE

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000                         // set port or 3000
const app = express()                                         // create app
const hbs = exphbs.create({
  defaultLayout: 'main',                                      // set default layout
  extname: 'hbs'                                              // rename name of handlebars extantion
})

app.engine('hbs', hbs.engine)                                 // register engine with 'hbs' key
app.set('view engine', 'hbs')                                 // set in express to use 'hbs' by default
app.set('views', 'views')                                     // register in express path with views files

app.use(express.urlencoded({extended: true}))                 // add middleware. It needs to get data from browser

app.use(todoRoutes)
app.use(express.static(path.join(__dirname, 'public')))       // add css static

async function start () {
  try {
    await mongoose.connect(
      'mongodb+srv://user_express:SET_YOUR_API@cluster0.eycxr.mongodb.net/todos',
      {                                                       // connect to mongo
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {                                  // run server
      console.log(`Server has been started on ${PORT}`)
  })
  } catch(e) {
    console.log(e)
  }
}

start()






