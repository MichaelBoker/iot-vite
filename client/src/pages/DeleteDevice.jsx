import { redirect } from "react-router-dom"
import httpRequest from "../utils/httpRequest"
import { handleError, handleSuccess } from "../utils/toastService"

export const deleteAction = async ({ params }) => {
    try {
        const response = await httpRequest.delete(`/devices/${params.id}`)
        handleSuccess(response)
    } catch (error) {
        handleError(error)
    }

    return redirect('../allDevices')
}