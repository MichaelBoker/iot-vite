import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrappers/LandingPage'
import mainImg from '../assets/main.svg'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <div id="logo-container">
        <Logo/>
      </div>
        <div className='container page'>
            <div className='info'>
                <h1>IOT App</h1>
                <p>
                 This is my IOT project.
                 <br/>
                 You are welcome to register and start exploring or give it a try with the test user!
                 <strong> test user - All request are mocked! this user is used to showcase the app functionality </strong>
                </p>
                <div id='buttons-wrapper'>
                  <Link to="/login" className='btn'>Login</Link>
                  <Link to="/register" className='btn'>Register</Link>
                </div>
            </div>
            <div className='banner'>
                <img src={mainImg} className='img' alt='mainImg'/>
            </div>
        </div>
    </Wrapper>
  )
}

export default Landing