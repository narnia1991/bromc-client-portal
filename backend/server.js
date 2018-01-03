/*
* @Author: Narnia
* @Date:   2017-12-08 20:02:08
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T19:42:10+08:00
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
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})
//routes
import country from './routes/country'
import login from './routes/login'
import logout from './routes/logout'
import logs from './routes/logs'
import medHistory from './routes/medical_history'
import registration from './routes/registration'
import reports from './routes/reports'
import schedule from './routes/schedule'
import therOpts from './routes/therapy_details'
import userInfo from './routes/user_info'
import users from './routes/users'

//API routes
app.use('/api/auth', cors(), login)
app.use('/api/country', cors(), country)
app.use('/api/medical-history', cors(), medHistory)
app.use('/api/logout', cors(), logout)
app.use('/api/logs', cors(), logs)
app.use('/api/registration', cors(), therOpts)
app.use('/api/reports', cors(), reports)
app.use('/api/schedule', cors(), schedule)
app.use('/api/therapy-options', cors(), therOpts)
app.use('/api/user-info', cors(), userInfo)
app.use('/api/users', cors(), users)

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
