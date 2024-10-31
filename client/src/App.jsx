
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { DashboardLayout, HomeLayout, Landing, Login, Register, Error, Stats, AddDevice, AllDevices, Device } from './pages'
import { registerAction } from './pages/Register'
import { LoginAction } from './pages/Login'
import { loader as dashboardLoader} from './pages/DashboardLayout';
import { loader as allDevicesLoader } from './pages/AllDevices';
import { loader as deviceLoader } from './pages/Device';
import { loader as statsLoader } from './pages/Stats';
import { loader as typesLoader } from './pages/AddDevice';
import { loader as registerLoader} from './pages/Register'
import { addDeviceAction } from './pages/AddDevice';
import { deleteAction } from './pages/DeleteDevice';
import ErrorElement from './components/ErrorElement';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { FIVE_MINUTES } from './utils/constant';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MINUTES
    }
  }
})


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'login',
        element:<Login/>,
        action: LoginAction(queryClient)
      },
      {
        path:'register',
        element:<Register/>,
        action: registerAction,
        loader: registerLoader
      },
      {
        path:'dashboard',
        element:<DashboardLayout/>,
        loader: dashboardLoader(queryClient),
        children:[
          {
            index: true,
            element:<Stats/>,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement/>
          },
          {
            path: 'addDevice',
            element:<AddDevice/>,
            loader: typesLoader,
            action: addDeviceAction
          },
          {
            path: 'allDevices',
            element:<AllDevices/>,
            loader: allDevicesLoader
          },
          {
            path:'device/:id',
            element: <Device/>,
            loader: deviceLoader
          },
          {
            path:'delete-device/:id',
            action: deleteAction
          }
        ]
      }
    ]
  }
])
 
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App