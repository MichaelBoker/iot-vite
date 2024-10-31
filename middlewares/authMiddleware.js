import { UnauthenticatedError } from "../utils/customErrors.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies
    if(!token) throw new UnauthenticatedError('No token Provided')

    try {
        const {userId, company, role} = verifyJWT(token)
        req.user = {userId, company, role}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }
}