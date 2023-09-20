import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainUi from './mianUi/MainUi'
import Home from './pages/Home'
import Products from './pages/Products'
import Dashboard from './pages/dashboard'
import Details from './pages/details'

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainUi></MainUi>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/product',
        element: <Products></Products>,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/product/:productId',
        element: <Details></Details>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.productId}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
