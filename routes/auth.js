// Authentication routes go here

const express = require('express')
const router = express.Router()
const { register } = require('../controllers/auth/register')
const { resendOTP } = require('../utils/auth/resentOTP')
const { verifyOtp } = require('../utils/auth/verifyOTP')
const { login } = require('../controllers/auth/login')
const { default: google } = require('../controllers/auth/google')

router.post('/register', register)
router.post('/verify-otp', verifyOtp)
router.post('/resent-otp', resendOTP)
router.post('/login', login)
router.post('/google', google)

module.exports = router
