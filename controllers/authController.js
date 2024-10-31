import {StatusCodes} from 'http-status-codes'
import User from '../models/userModel.js'
import Company from '../models/companyModel.js'
import { comparePassword, hashPassword } from '../utils/passwordUtils.js'
import { UnauthenticatedError } from '../utils/customErrors.js'
import { createJWT } from '../utils/tokenUtils.js'

const register = async (req,res) => {
    
    req.body.password = await hashPassword(req.body.password)

    const company = await Company.findOne({name: req.body.company})
    req.body.company = company._id;

    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({msg: 'Successfully registered'})
}

const login = async (req,res) => {

    const user = await User.findOne({email: req.body.email})
    const isValidUser = user && await comparePassword(req.body.password, user.password)
    
    if(!isValidUser) throw new UnauthenticatedError('Please provide a valid email and password.')
    
    const token = createJWT({ userId: user._id, company: user.company, role: user.role })

    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000*60*60*24 ),
        secure: process.env.NODE_ENV === 'production'
    })
    res.status(StatusCodes.OK).json({msg: 'Logged in'})
}


const logout = (req, res) => {
    res.cookie('token','logout',{
        httpOnly: true,
        expires: new Date(Date.now())
    })

    res.status(StatusCodes.OK).json({msg: 'Logged out'})
}

export { register, login, logout }