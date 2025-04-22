import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home.tsx';
import Tableau from "./pages/Tableau.tsx";
import App from './App.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children :[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/tableau",
        element: <Tableau />
      },
    ]
  }
])
const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
