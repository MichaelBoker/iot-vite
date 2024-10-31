import { Form, Link, redirect, useLoaderData } from "react-router-dom"
import { FormRow, Logo } from "../components"
import Wrapper from "../assets/Wrappers/RegisterPage"
import httpRequest from "../utils/httpRequest"
import { handleError, handleSuccess } from "../utils/toastService"

export const loader = async () => {
  try {
    const {data} = await httpRequest.get('/company')
    return data;
  } catch (error) {
    handleError(error)
    return error
  }
}

export const registerAction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  try {
    const response = await httpRequest.post('/auth/register',data)
    handleSuccess(response)
    return redirect('/login')
    
  } catch (error) {
    handleError(error)
    return error
  }
}

const Register = () => {

  const companies = useLoaderData()

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo/>
        <h4>Register</h4>
        <FormRow type="text" name="name" label="name" required={true}></FormRow>
        <FormRow type="text" name="email" label="email" required={true}></FormRow>
        <FormRow type="text" name="password" label="password" required={true}></FormRow>
        <FormRow type="select" name="company" label="Company" listValues={companies.map(x => x.name)} required={true}></FormRow>
        <button type="submit" className="btn btn-block">Submit</button>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
        
      </Form>
    </Wrapper>
  )
}

export default Register