const express = require('express')
const router = express.Router()

const login = require('../controllers/auth/login')
const resendOTP = require('../utils/auth/resendOTP')
const verifyOtp = require('../utils/auth/verifyOTP')
const google = require('../controllers/auth/google')
const github = require('../controllers/auth/github')
const register = require('../controllers/auth/register')
const verifyToken = require('../middleware/auth/verifyToken')
const forgetPassword = require('../controllers/auth/forgetPassword')
const changePassword = require('../controllers/auth/changePassword')

router.post('/register', register)
router.post('/verify-otp', verifyOtp)
router.post('/resent-otp', resendOTP)
router.post('/login', login)
router.post('/google', google)
router.post('/github', github)
router.post('/forgot-password', forgetPassword)
router.post('/reset-password', verifyToken, changePassword)

module.exports = router