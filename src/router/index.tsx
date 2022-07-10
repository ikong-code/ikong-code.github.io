import { useRoutes, Navigate } from "react-router-dom"
import Home from "@/views/Home"
import List from "@/views/List"
import Detail from "@/views/Detail"
import Files from "@/views/Files"
import Layout from "@/views/Layout"
import Tags from "@/views/Tags"

const routerConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
    ],
  },
  {
    path: "/home",
    element: <Navigate to="/" />,
  },
]

const Router = () => useRoutes(routerConfig)
export default Router
