import { VscInfo, VscError, VscWarning, VscPass } from "react-icons/vsc";
import Wrapper from "../assets/Wrappers/Message";


const CustomIcon = ({type}) => {
  switch (type) {
    case 'INFO':
      return <VscInfo/>
      case 'ERROR':
      return <VscError/>
      case 'WARNING':
      return <VscWarning/>
      default:
        return <VscPass/>
  }
}

const Message = ({ content, messageType, notifyTime }) => {
  return (
   <Wrapper className={ messageType.toLowerCase() }>
    <CustomIcon type={messageType}/>
    <div className="content">
    <p>{ content }</p>
    <span>{ new Date(notifyTime).toLocaleString() }</span>
    </div>
   </Wrapper>
  )
}
export default Message