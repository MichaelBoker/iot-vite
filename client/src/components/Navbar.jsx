import { FaAlignLeft, FaRegCircleUser, FaX } from "react-icons/fa6";
import Wrapper from "../assets/Wrappers/Navbar";
import Logo from "./Logo";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

const Navbar = ({ user, logoutUser}) => {
  const {toggleSidebar, showSidebar} = useDashboardContext()
  const [showDropDown, setShowDropDown] = useState(false)

  return (
    <Wrapper>
        <div className="nav-center">
            <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                { showSidebar ? <FaX/> : <FaAlignLeft/> }
            </button>
            <Logo/>
            <div className="user-container">
                <button className="user" type="button" onClick={() => setShowDropDown(!showDropDown)}><FaRegCircleUser/></button>
                <div className={showDropDown ? "dropdown show-dropdown":"dropdown"}>
                  <strong>{user?.name}</strong>
                  <button className="logout-btn" type="button" onClick={logoutUser}>Logout</button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
export default Navbar