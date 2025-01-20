import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/Theme.context';
import { AuthProvider } from './contexts/Auth.context';
import './index.css'
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import CarList from './pages/kopen/CarList';
import CarForm from './pages/verkopen/CarForm';
import Favorieten from './pages/Favorieten';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Logout from './pages/Logout';
import AddOrEditAdvert from './pages/AddOrEditAdvert';
import Advertentie from './pages/kopen/AdvertentiePagina';
import MijnAdvertenties from './pages/verkopen/MijnAdvertenties';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/kopen" />,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/kopen',
        children: [
          {
            index: true,
            element: <CarList />,
          },
          {
            path: 'advertentie/:id',
            element: <Advertentie />,
          }
        ],
      },
      {
        path: '/verkopen',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <MijnAdvertenties />,
          },
          {
            path: 'add',
            element: <AddOrEditAdvert />,
          },
          {
            path: 'edit/:id',
            element: <AddOrEditAdvert />,
          }
        ],
      },
      {
        path: '/favorieten',
        element: <PrivateRoute/>,
        children: [
          {
            index: true,
            element: <Favorieten />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
