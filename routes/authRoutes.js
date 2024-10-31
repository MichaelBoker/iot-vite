import express from 'express'
import { login, register, logout } from '../controllers/authController.js'
import { loginInputValidator, registerInputValidator } from '../middlewares/validationMiddleware.js'

const router = express.Router()

router.route('/register').post(registerInputValidator, register)
router.route('/login').post(loginInputValidator, login)
router.route('/logout').post(logout)

export default router