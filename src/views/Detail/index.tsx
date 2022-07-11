import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "antd"
import { LeftOutlined } from "@ant-design/icons"
import ReactMarkdown from "react-markdown"
import axios from "@/service"

const Detail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState("")
  useEffect(() => {
    console.log(params.filename, import.meta.env.MODE)
    axios
      .get(
        (import.meta.env.MODE === "development"
          ? "../public/docs/"
          : "public/docs/") + params.filename
      )
      .then((res: any) => {
        setContent(res)
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
