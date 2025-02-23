
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/home/Homepage'
import TodoApp from './pages/TodoApp/TodoApp'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"todoApp",
          element:<TodoApp/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
