import express from 'express'
import {getAllDevices, getDevice, deleteDevice, createDevice, showStats} from '../controllers/deviceController.js'
import { deviceInputValidator, validateId } from '../middlewares/validationMiddleware.js'
import { handleDeviceMock, handleAllDeviceMock, handleStatsMock, handleCreateMock, handleDeleteMock } from '../middlewares/mocksMiddleware.js'

const router = express.Router()
router.route('/').get(handleAllDeviceMock, getAllDevices).post(deviceInputValidator,handleCreateMock, createDevice)
router.route('/stats').get(handleStatsMock, showStats)
router.route('/:id').get(handleDeviceMock, validateId, getDevice).delete(validateId, handleDeleteMock, deleteDevice)


export default router