const express = require('express')
const app = express()
var cors = require('cors')
app.use(express.json())
const path = require('path')
app.use('/static', express.static(path.join(__dirname, '../uploads')))
app.use(cors());


const userController = require('./controllers/users')
app.use('/users', userController)

const newsController = require('./controllers/news')
app.use('/news', newsController)

const vehicleController = require('./controllers/vehicles')
app.use('/vehicles', vehicleController)


const reviewsController = require('./controllers/reviews')
app.use('/reviews', reviewsController)

const commentsController = require('./controllers/comments')
app.use('/comments', commentsController)

const galleryController = require('./controllers/gallery')
app.use('/gallery', galleryController)

const ticketsController = require('./controllers/tickets')
app.use('/tickets', ticketsController)

module.exports = app;
