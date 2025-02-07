import './App.css'
import Create from "./pages/Create"
import Home from "./pages/Home"
import Applayout from './components/Applayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Mails from './pages/Mails'

function App() {
  
const router=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/create",
        element:<Create/>
      },{
        path:"/update/:id",
        element:<Create/>
      }
      ,{
        path:"/mails"
        ,
        element:<Mails/>
      }
    ]

  }
])
  return (
    
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
