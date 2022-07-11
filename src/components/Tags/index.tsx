import { useEffect } from 'react'
import { Tag } from 'antd'
import { TagsList } from '@/types'
import { useSearchParams } from 'react-router-dom'

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

interface IProps {
  tagList: TagsList[]
}

const Tags = ( {tagList = []}: IProps ) => {
  const [getParams, setParams] = useSearchParams()
  const tagName = getParams.get('tag')
  
  return <>
    {tagList.map((i) => {
      const color = colorList[Math.floor(Math.random() * 9)]
      return (
        <Tag
          className="!mt-6px"
          color={color}
        >
          <a onClick={() => setParams({tag: i.tag})} >{`${i.tag}(${i.count})`}</a>
        </Tag>
      )
    })}
  </>
}

export default Tags