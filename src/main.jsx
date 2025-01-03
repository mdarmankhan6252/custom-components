import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './components/Home';
import Carousel from './carousels/Carousel';
import Buttons from './buttons/Buttons';
import Cards from './cards/Cards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/carousel',
        element: <Carousel />
      },
      {
        path: '/buttons',
        element: <Buttons />
      },
      {
        path: '/cards',
        element: <Cards />
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
