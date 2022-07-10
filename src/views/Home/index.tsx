import { useEffect } from "react"
import axios from '@/service'
import Artical from "@/components/Artical"

const Home = () => {
  useEffect(() => {
    const loadMD = async () => {
      const content = await axios.get('src/docs/2022-07-10_react-router.md')
      console.log(JSON.stringify(content))
    }
    loadMD()
  }, [])

  return (
    <div className="artical-list pr-20px pt-30px pb-30px">
      <Artical />
      <Artical />
      {/* <Artical />
      <Artical />
      <Artical />
      <Artical />
      <Artical />
      <Artical />
      <Artical /> */}
    </div>
  )
}

export default Home
