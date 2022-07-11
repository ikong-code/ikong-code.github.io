import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "antd"
import { LeftOutlined } from "@ant-design/icons"
import ReactMarkdown from "react-markdown"
import { ArticalProps } from "@/types"
import axios from "@/service"

const Detail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState("")
  useEffect(() => {
    axios.get("/docs/data.json").then((res: any) => {
      const { list = [] } = res
      const tarIdx = list.findIndex(
        (i: ArticalProps) => i.filename === params.filename
      )
      setContent(tarIdx > -1 ? list[tarIdx].content : "")
    })
  }, [params.filename])
  return (
    <div className="p-20px">
      <div className="mb-16px">
        <Button
          shape="round"
          icon={<LeftOutlined />}
          onClick={() => navigate(-1)}
        >
          返回
        </Button>
      </div>
      <ReactMarkdown children={content} />
    </div>
  )
}

export default Detail
