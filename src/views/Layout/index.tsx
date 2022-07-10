import LayoutHeader from "@/components/LayoutHeader"
import Introduct from "@/components/Introduct"
import { Outlet } from "react-router-dom"
import "./index.less"

const Layout = () => (
  <div className="">
    <LayoutHeader />
    <div className="blog-content flex">
      <Introduct />
      <div className="blog-content__outlet flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  </div>
)

export default Layout
