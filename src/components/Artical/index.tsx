import ReactMarkdown from "react-markdown"

const Artical = () => (
  <div className="artical-container border-1 border-#ebedf0 px-24px py-16px mb-10px transition hover:bg-##effbff">
    <ReactMarkdown children={"# 这是文章标题\n\n"} />
  </div>
)

export default Artical
