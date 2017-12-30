/*
* @Author: Narnia
* @Date:   2017-12-08 20:02:08
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T03:06:07+08:00
*/
import bodyParser from 'body-parser' //to enable the browser to read json response
import cors from 'cors' //to enable the frontend app to communicate to this server
import logger from 'morgan' //we use this to log our api calls
import methodOverride from 'method-override' //we use this so that we can call functions outside the scopes
// import session from 'express-session'
// var passport = require('passport')
//this area is for the configuration of the express app
import express from 'express'
const app = express()
const port = process.env.PORT || 8008
app.use(express.static(__dirname + '/public'))

//app middlewares setup
app.use(logger('dev'))
app.use(methodOverride('_method'))
app.options('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//
// const MySQLStore = require('express-mysql-session')(session)
//
// const options = {
//   host: 'localhost',
//   port: 3306,
//   user: 'arjel002',
//   password: 'Silly@2017',
//   database: 'bromc'
// }
//
// var sessionStore = new MySQLStore(options)
//
// app.use(
//   session({
//     key: 'session_cookie_name',
//     secret: 'session_cookie_secret',
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false
//   })
// )
//
// app.use(passport.initialize())
// app.use(passport.session())
//routes
// import city from './routes/city'
import clients from './routes/clients'
import country from './routes/country'
import login from './routes/login'
// import oauth2 from './routes/oauth2'
import users from './routes/users'

//API routes
app.use('/api/clients', clients)
app.use('/api/country', country)
app.use('/api/login', login)
// app.use('/api/oauth2', oauth2)
app.use('/api/users', users)

app.listen(port)
console.log('Cool! the server is listening at port : ' + port)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      error: {
        message: err.message,
        error: err
      }
    })
  })
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message,
      error: err
    }
  })
})

module.exports = app
