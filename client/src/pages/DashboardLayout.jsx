import { Outlet, redirect, useNavigate, useNavigation } from "react-router-dom"
import { Loader, Navbar, Sidebar } from "../components"
import Wrapper from "../assets/Wrappers/Dashboard"
import { createContext, useContext, useState } from "react"
import httpRequest from "../utils/httpRequest"
import { handleSuccess } from "../utils/toastService"
import { useQuery } from "@tanstack/react-query"


const usersQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const response =  await httpRequest.get('/account')
    return response.data
  }
}

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(usersQuery)
  } catch (error) {
    redirect ('/')
  }
}

const DashboardContext = createContext()

const DashboardLayout = () => {

  const { user } = useQuery(usersQuery).data
  const navigate = useNavigate()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  const [showSidebar, setShowSidebar] = useState(false)
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logoutUser = async () => {
    navigate('/')
    const response = await httpRequest.post('/auth/logout')
    handleSuccess(response)
  }

  return (
    <DashboardContext.Provider value={{
      showSidebar,
      toggleSidebar,
    }}>
  <Wrapper>
      <main className="dashboard"> 
        <Sidebar/>
        <div className="dashboard-body">
          <Navbar logoutUser={logoutUser} user={user}/>
          <div className="dashboard-content">
            {isLoading ? <Loader/> : <Outlet context={{user}}/> }
          </div>
        </div>
      </main>
    </Wrapper>  
    </DashboardContext.Provider>
    
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout