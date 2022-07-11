import { useState, useEffect } from "react"
import axios from "@/service"
import { useSearchParams } from "react-router-dom"
import Artical from "@/components/Artical"
import { ArticalProps, TagsList } from "@/types"
import TagsComp from "@/components/Tags"

type UseType = "tagAll" | "tag" | "list"

interface IProps {
  type?: UseType
}

const Home = ({ type = "list" }: IProps) => {
  const [articalList, setArticalList] = useState<ArticalProps[]>([])
  const [tagConnection, setTagConnection] = useState<TagsList[]>([])

  const [getParams] = useSearchParams()
  const tagName: any = getParams.get("tag")
  const keyword: any = getParams.get("keyword")
  useEffect(() => {
    const loadMD = async () => {
      const { list = [] }: { list: ArticalProps[] } = await axios.get(
        "/docs/data.json"
      )
      let filterList: ArticalProps[] = []
      // 某标签分类下时筛选数据
      if (tagName || type === "tagAll") {
        const tagConnection: TagsList[] = []
        list.forEach((i) => {
          const tags = i.tags.split(",")
          if (tags.includes(tagName)) {
            filterList.push(i)
          }
          tags.forEach((tag) => {
            const existIdx = tagConnection.findIndex(
              (t: TagsList) => t.tag === tag
            )
            if (existIdx === -1) {
              tagConnection.push({ tag, count: 1 })
            } else {
              tagConnection[existIdx] = {
                ...tagConnection[existIdx],
                count: tagConnection[existIdx].count + 1,
              }
            }
          })
        })
        setTagConnection(tagConnection)
      } else {
        filterList = [...list]
      }
      if(keyword) {
        filterList = filterList.filter((i) => {
          console.log(i.title);
          return i.title.indexOf(keyword) > -1
        })
      }
      setArticalList(filterList || [])
    }
    loadMD()
  }, [tagName, keyword])

  return (
    <div className="artical-list pr-20px pt-30px pb-30px">
      {type === "tagAll" && (
        <div className="p-16px">
          <TagsComp tagList={tagConnection} />
        </div>
      )}
      {articalList.map((i, idx) => (
        <Artical detail={i} key={idx} />
      ))}
    </div>
  )
}

export default Home
