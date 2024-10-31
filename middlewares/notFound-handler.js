import {StatusCodes} from 'http-status-codes'

const NotFoundHandler = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send('Route dose not exist')
}

export default NotFoundHandler