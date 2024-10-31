import {StatusCodes} from 'http-status-codes'

const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const message = error.message || 'something went wrong'

    res.status(statusCode).json({msg: message})
}

export default errorHandler