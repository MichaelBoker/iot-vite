import Wrapper from "../assets/Wrappers/Sidebar"
import { FaX } from "react-icons/fa6";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import { isMobile } from 'react-device-detect';

const SideBar = () => {
  const {showSidebar ,toggleSidebar} = useDashboardContext()

  let classes = `sidebar-container ${showSidebar ? 'show-sidebar' : ''}`

  return (
    <Wrapper>
      <div  className={isMobile ? 'mobile' : 'desktop'}>
      <div className={classes}>
        <button type="button" className="close-btn" onClick={toggleSidebar}>
          <FaX />
        </button>
        <header>
          <Logo/>
        </header>
        <div className="links">
          {links.map(link => {
            const {text, path, icon} = link
            return (
              <NavLink to={path} key={text} onClick={isMobile? toggleSidebar : null} end>
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            )
          })}
        </div>
      </div>
      </div>
    </Wrapper>
  )
}
export default SideBar