import { GithubOutlined } from "@ant-design/icons"
import { Divider, Tag } from "antd"
import Avater from "@/assets/images/avater.jpg"
import "./index.less"

const mockList = new Array(10)
  .fill("")
  .map((i) => Math.random().toString(36).slice(2))
const colorList = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
]

const LayoutHeader = () => (
  <div className="blog-introduct w-280px p-12px pr-30px pl-30px pt-30px overflow-y-auto">
    <img className="w-132px  h-132px rounded-full" src={Avater} alt="avater" />
    <h2 className="text-center m-10px font-blod text-1.5em">iKong</h2>
    <h5 className="text-center">Web Developer & Designer</h5>
    <div className="flex justify-center mt-10px">
      <div className="mr-12px">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ikong-code"
        >
          <GithubOutlined /> github
        </a>
      </div>
      <div className="mr-12px">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://juejin.cn/user/641770523209592"
        >
          <img
            className="w-14px inline"
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
          />{" "}
          掘金
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.yuque.com/u25937917"
        >
          <img
            className="w-14px inline"
            src="https://gw.alipayobjects.com/zos/bmw-prod/735cefc9-f976-4c87-8b48-85f713f5b713.svg"
          />{" "}
          语雀
        </a>
      </div>
    </div>

    <div className="mt-20px text-1.2em">
      <Divider orientation="left">标签</Divider>
    </div>
    <div className="text-center">
      {mockList.map((i) => (
        <Tag
          className="!mt-6px"
          color={colorList[Math.floor(Math.random() * 9)]}
        >
          <a href={`/tags?tag=${i}`}>{i}</a>
        </Tag>
      ))}
    </div>
  </div>
)

export default LayoutHeader
