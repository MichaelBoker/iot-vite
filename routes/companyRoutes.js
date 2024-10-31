import express from 'express'
import { getTypes, getCompanies } from '../controllers/companyController.js'

const router = express.Router()

router.route('/types').get(getTypes)

export default router
