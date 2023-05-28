import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './style'
import Coffee from './pages/Coffee'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/coffee",
    element:<Coffee/>
  }

])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
