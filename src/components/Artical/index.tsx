import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { useNavigate } from "react-router-dom"
import axios from "@/service"
import { Divider } from "antd"
import { ArticalProps } from "@/types"

const Artical = ({ detail }: { detail: ArticalProps }) => {
  const { title, tags, time, filename } = detail

  const navigate = useNavigate()
  const [content, setContent] = useState("")
  useEffect(() => {
    axios.get("/docs/" + filename).then((res: any) => {
      setContent(res)
    })
  }, [])

  const handleDetail = () => {
    navigate("/detail/" + filename)
  }
  return (
    <div
      onClick={handleDetail}
      className="artical-container border-1 border-#ebedf0 px-24px py-16px mb-10px"
    >
      <Divider orientation="left">
        <span className="text-16px font-blod cursor-pointer">{title}</span>
        <span className="text-12px  ml-20px  mr-20px">{time}</span>
        <span className="text-12px">{tags}</span>
      </Divider>
      <ReactMarkdown children={content} />
    </div>
  )
}

export default Artical
