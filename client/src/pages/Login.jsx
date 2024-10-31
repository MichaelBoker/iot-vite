import { Form, Link, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import httpRequest from "../utils/httpRequest";
import { handleError } from "../utils/toastService";
import { toast } from "react-toastify";

export const LoginAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await httpRequest.post("/auth/login", data);
      queryClient.invalidateQueries();
      return redirect("/dashboard");
    } catch (error) {
      handleError(error);
      return error;
    }
  };

const Login = () => {
  const navigate = useNavigate();

  const loginDemo = async () => {
    const data = {
      email: "test@test.com",
      password: "test12345",
    };

    try {
      await httpRequest.post("/auth/login", data);
      toast('Login to Demo')
      navigate("/dashboard");
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="text"
          name="email"
          label="email"
          required={true}
        ></FormRow>
        <FormRow
          type="text"
          name="password"
          label="password"
          required={true}
        ></FormRow>
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <button type="button" className="btn btn-block" onClick={loginDemo}>
          Explore the app
        </button>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
