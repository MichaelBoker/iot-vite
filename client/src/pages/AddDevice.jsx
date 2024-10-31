import Wrapper from "../assets/Wrappers/DashboardForm"
import {Form, redirect, useLoaderData, useNavigation} from 'react-router-dom';
import { FormRow } from "../components";
import httpRequest from "../utils/httpRequest";
import { handleError, handleSuccess } from "../utils/toastService";

export const loader = async () => {
  try {
    const { data }  = await httpRequest.get("/company/types")
    return data
  } catch (error) {
    handleError(error);
    return error;
  }
}

const handleOwnerData = (data) => {
  const owner = {
    name: data.name,
    email: data.email,
    phone: data.phone
  }

  delete data.name
  delete data.email
  delete data.phone

  return owner
}

export const addDeviceAction = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  data.owner = handleOwnerData(data)

  try {
    const response = await httpRequest.post('/devices',data)
    handleSuccess(response)
    return redirect('../allDevices')
  } catch (error) {
    handleError(error)
    return error
  }
}

const AddDevice = () => {
  const { types } = useLoaderData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting' 
  return (
    <Wrapper>
      <Form method="post" className="form">
        <section className="form-center device">
        <h4 className="form-title">Device details</h4>
          <FormRow type="text" name="device_name" label="Name" required={true} />
          <FormRow type="text" name="description" label="Description" required={true} />
          <FormRow type="text" name="code" label="Code" required={true} />
          <FormRow
            type="select"
            name="type"
            label="Type"
            listValues={types}
          />
        </section>
        <section className="form-center owner">
        <h4 className="form-title">Owner details</h4>
          <FormRow type="text" name="name" label="Name" required={true} />
          <FormRow type="text" name="phone" label="Phone" required={true} />
          <FormRow type="text" name="address" label="Address" required={true} />
          <FormRow type="text" name="email" label="Email" required={true} />
        </section>
        <button type="submit" className="btn form-btn" disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'Add device'}</button>
      </Form>
    </Wrapper>
  )
}
export default AddDevice