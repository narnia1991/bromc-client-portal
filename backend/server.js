/*
* @Author: Narnia
* @Date:   2017-12-08 20:02:08
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:30:24+08:00
*/
import bodyParser from 'body-parser' //to enable the browser to read json response
import cors from 'cors' //to enable the frontend app to communicate to this server
import logger from 'morgan' //we use this to log our api calls
import methodOverride from 'method-override' //we use this so that we can call functions outside the scopes

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

//routes
import country from './routes/country'
import login from './routes/login'
import logout from './routes/logout'
import logs from './routes/logs'
import medHistory from './routes/medical_history'
import registration from './routes/registration'
import reports from './routes/reports'
import therOpts from './routes/therapy_details'
import users from './routes/users'
import userInfo from './routes/user_info'

//API routes
app.use('/api/auth', login)
app.use('/api/country', country)
app.use('/api/medical-history', medHistory)
app.use('/api/logout', logout)
app.use('/api/logs', logs)
app.use('/api/registration', therOpts)
app.use('/api/reports', reports)
app.use('/api/therapy-options', therOpts)
app.use('/api/users', users)
app.use('/api/user-info', userInfo)

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
