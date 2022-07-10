import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import LogoImg from "@/assets/images/logo.png"
import Nav from "../Nav"
import "./index.less"

const LayoutHeader = () => (
  <div className="blog-header h-60px p-12px pr-30px pl-30px flex">
    <div className="blog-header__left flex flex-auto align-center">
      <img className="h-40px mr-20px" src={LogoImg} />
      <Input
        size="small"
        placeholder="请输入关键字搜索"
        prefix={<SearchOutlined />}
      />
    </div>
    <Nav />
  </div>
)

export default LayoutHeader
