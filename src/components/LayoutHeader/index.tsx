import { useEffect } from 'react'
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { useSearchParams } from 'react-router-dom'
import LogoImg from "../../assets/images/logo.png"
import Nav from "../Nav"
import "./index.less"

const LayoutHeader = () => {
  const [, setParams] = useSearchParams()

  const handleSearch = (e: { target: { value: string } }) => {
    setParams({keyword: (e.target.value).trim()})
  }
  return (
    <div className="blog-header h-60px p-12px pr-30px pl-30px flex">
      <div className="blog-header__left flex flex-auto align-center">
        <img className="h-40px mr-20px" src={LogoImg} />
        <Input
          size="small"
          placeholder="请输入关键字搜索"
          onPressEnter={handleSearch}
          prefix={<SearchOutlined />}
          allowClear={true}
        />
      </div>
      <Nav />
    </div>
  )
}

export default LayoutHeader
