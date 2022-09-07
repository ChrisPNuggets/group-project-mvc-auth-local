const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// const productRoute = require("./routes/product")
// const cartRoute = require("./routes/cart")
// const orderRoute = require("./routes/order")
// const stripeRoute = require("./routes/stripe")
// const cors = require("cors")

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router