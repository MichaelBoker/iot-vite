import {StatusCodes} from 'http-status-codes'
import userModel from '../models/userModel.js'

const getUser = async (req, res, next) => {
    const user = await userModel.findById(req.user.userId)
    res.status(StatusCodes.OK).json({user: user.getUser()})
}

const updateUser = async (req, res, next) => {

    const newUser = {...req.body};
    delete newUser.password
    delete newUser.role

    const updatedUser = await userModel.findByIdAndUpdate(res.user.userId,newUser)

    res.status(StatusCodes.OK).json({ msg: 'updated successfully' });
}

export { getUser, updateUser }