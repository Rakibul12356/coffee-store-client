import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home"
import AddCoffee from "./components/AddCoffee"
import UpdateCoffee from "./components/UpdateCoffee"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"/updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);