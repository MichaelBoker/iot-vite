import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Device"
import { FaCircle } from "react-icons/fa6";

const Device = ({_id, isConnected, device_name, code, description, sensor}) => {
  return (
    <Wrapper>
        <header>
        <div className={isConnected? 'connection online' : "connection offline"}><FaCircle/></div>
            <div className="info">
            <h5>{device_name}</h5>
            <p>{code}</p>
            </div>
            <div className="notifications">{sensor.newMessages}</div>
        </header>
        <div className="content">
        <p>{description}</p>
        </div>
        <footer className="actions">
            <Link to={`../device/${_id}`} className="btn info-btn">Info</Link>
            <Form method="post" action={`../delete-device/${_id}`}>
                <button type="submit" className="btn delete-btn">Delete</button>
            </Form>
        </footer>
    </Wrapper>
  )
}
export default Device