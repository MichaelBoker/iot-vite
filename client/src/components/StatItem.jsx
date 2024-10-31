import Wrapper from "../assets/Wrappers/statItem"
import { FaCircle } from "react-icons/fa6";


const StatItem = ({data, title}) => {
  return (
    <Wrapper className={title}>
        <header>
        <h5>{title}</h5>
        </header>
        <strong> {data} </strong>
    </Wrapper>
  )
}
export default StatItem