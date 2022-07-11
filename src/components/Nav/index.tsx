import React from "react"
import {
  FormOutlined,
  HomeOutlined,
  FolderOutlined,
  GithubOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { Menu } from "antd"
// import "./index.less"

const Nav = () => {
  const [current, setCurrent] = React.useState<string>("/")
  const navigate = useNavigate()

  const items = [
    {
      label: "首页",
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "归档",
      key: "files",
      icon: <FormOutlined />,
    },
    {
      label: "分类",
      key: "tags",
      icon: <FolderOutlined />,
    },
  ]

  // <GithubOutlined />
  const onClick = (e: any) => {
    setCurrent(e.key)

    e.key === "/" ? navigate(`/`) : navigate(`/${e.key}`)
  }

  const handleOpenGit = () => {
    window.open("https://github.com/ikong-code", "blank")
  }

  return (
    <div className="flex align-center">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <GithubOutlined onClick={handleOpenGit} className="text-18px ml-20px" />
    </div>
  )
}

export default Nav
