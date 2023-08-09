import { useState } from "react"


import Button from "@/components/Button"


import { type IArticlePostType } from "../../types"
import * as S from "./styles"



interface IArticleProps {
  article: IArticlePostType
}

const Article = ({ article: { cover, title, prevDescription, redirect } }: IArticleProps): JSX.Element => {
  return (
    <S.Article
      backgroundImg={cover}
    >
      <div className={`popup-article translate-y`}>
        <h3>{title}</h3>
        <p>{prevDescription}</p>
        <Button className="button-know-more" href={redirect}>Leia Mais</Button>
      </div>
    </S.Article>
  )
}

const FeedCarousel = ({ articles }: { articles: IArticlePostType[] }): JSX.Element => {
  const [currentPost, setCurrentPost] = useState(0)
  const handleTranslateFeed = (direction: "left" | "right"): void => {
    setCurrentPost(prevCurrent => {
      const current = direction === "left" ? prevCurrent - 1 : prevCurrent + 1
      return (
        current < 0 ? articles.length - 1 :
          current > articles.length - 1 ? 0 : current
      )
    })
  }
  return (
    <S.FeedCarousel>
      <Article article={articles[currentPost]} key={currentPost} />

      <button className="btn-controller-feed btn-direction-left" onClick={() => { handleTranslateFeed("left"); }} ><i className='bx bx-chevron-left'></i></button>
      <button className="btn-controller-feed btn-direction-right" onClick={() => { handleTranslateFeed("right"); }}><i className='bx bx-chevron-right' ></i></button>
      <ul className="current-feed">
        {
          articles.map((_article, index) => (
            <li
              key={`current-feed-carousel-${index}`}
              className={index === currentPost ? "mark-current" : ""}
              onClick={() => { setCurrentPost(index); }}
            />
          ))
        }
      </ul>
    </S.FeedCarousel>
  )
}

export default FeedCarousel