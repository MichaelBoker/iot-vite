import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/Wrappers/ErrorPage";
import NotFound from '../assets/404Error.gif'
import SomethingWrong from '../assets/something_wrong.png'
const Error = () => {

  const error = useRouteError();
  console.log(error.status)
  if(error.status === 404){
    return(
      <Wrapper>
         <div>
            <img src={NotFound} alt='Not-Found'></img>
            <h3>Page Not Found</h3>
            <p>we can seems to find the page you looking for</p>
            <Link to='/'>Back home</Link>
        </div>
      </Wrapper>
    )
  }
  else{
    return (
      <Wrapper>
        <div>
          <img src={SomethingWrong} alt='Something-Wrong'></img>
          <h3>Something went wrong</h3>
          <Link to='/'>Back home</Link>
        </div>
      </Wrapper>
    )
  }
}

export default Error