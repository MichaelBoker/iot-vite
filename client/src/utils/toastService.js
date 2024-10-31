import { toast } from "react-toastify"

const handleError = (error) => {
    const errorsList = error.response.data.msg.split(',')
    errorsList.forEach(error => {
      toast.error(error)
    });
}

const handleSuccess = (response) => {
    toast.success(response.data.msg)
}

export {handleError, handleSuccess}