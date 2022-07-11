const fs = require('fs');

// 同步读取上级目录下的所有文件到files中
const docsPath = 'public/docs'

async function buildDocs() {
  const files = fs.readdirSync('public/docs').reverse();
  // const getContent = async (name) => {
  //   const options = {
  //     flag: 'r',
  //     encoding: 'utf-8',
  //   };
  //   const content = await fs.readFileSync(docsPath + '/' + name, options);
  //   return content
  // }

const articalList = []
files.forEach((i, idx) => {
  // 匹配.md结尾的文件
  if(i.indexOf('.md') === (i.length - 3)) {
    const articalName = i.split('.md')[0]
    const firstIndex = articalName.indexOf('_')
    const time = articalName.slice(0, firstIndex)
    let title = articalName.slice(firstIndex + 1)
    // const content = await getContent(i)
    
    // 同步的方式 读取目标md文件内容
    const content = fs.readFileSync(docsPath + '/' + i, 'utf-8')
    let contentStr = content.split('\n')
    let tags = ''
    contentStr.forEach(c => {
      // 获取文章 title
      if (c.startsWith('title:')) {
        console.log(c)
        title = c.replace('title:', '') 
      } else if (c.startsWith('tag: ')) {
      // 获取文章 tags
          tags = c.replace('tag: ', '')
      }
    })
    console.log({id: idx, time, filename: i, title, tags})
    articalList.push(
      {
        id: idx, time, filename: i, title, tags
      }
    ) 
  }
})

fs.writeFileSync(docsPath + '/data.json', JSON.stringify({ list: articalList }));


console.log(articalList);
console.log(files);
}

buildDocs()
// const setArticalTag = (tarArr = [], {filename, title, time}) => {
//   tarArr.forEach(tag => {
//     const tarIdx = articalTagList.findIndex(item => {item.tag === tag})
//     if(tarIdx !== -1) {
//       articalTagList[tarIdx] = {
//         tag,
//         data: [
//           ...articalTagList[tarIdx].data,
//           { title, time, filename }
//         ]
//       }
//     } else {
//       articalTagList.push({tag, data: [{ title, time, filename }]})
//     }
//   })
// }





