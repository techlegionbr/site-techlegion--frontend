import image1 from "@/assets/images/home/sorrindo-retrato-de-um-homem-jovem-apertar-mao-scaled.webp"
import TitleSection from "@/components/TitleSection"


import Link from "next/link"

import ArticlePost from "./components/ArticlePost"
import { type ArticlePostType } from "./components/ArticlePost/types"
import FeedCarousel from "./components/FeedCarousel"
import * as S from "./style"

const articles: ArticlePostType[] = [
  {
    title: "Estratégias de social media para impulsionar marcas",
    date: new Date(),
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir",
    redirect: "/",
    subject: "ESTRATÉGIAS DE SOCIAL MEDIA"
  },
  {
    title: "Estratégias de social media para impulsionar marcas",
    date: new Date(),
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir",
    redirect: "/",
    subject: "ESTRATÉGIAS DE SOCIAL MEDIA"
  },
  {
    title: "Estratégias de social media para impulsionar marcas",
    date: new Date(),
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir",
    redirect: "/",
    subject: "ESTRATÉGIAS DE SOCIAL MEDIA"
  },
]

const articlesComplet: ArticlePostType[] = [
  {
    title: "Estratégias de social media para impulsionar marcas",
    date: new Date(),
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir, Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir, Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir,  Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir",
    redirect: "/",
    subject: "ESTRATÉGIAS DE SOCIAL MEDIA",
    cover: image1.src
  },
  {
    title: "Estratégias de social media para impulsionar marcas",
    date: new Date(),
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir, Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir, Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir,  Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir",
    redirect: "/",
    subject: "ESTRATÉGIAS DE SOCIAL MEDIA",
    cover: image1.src
  },
  {
    title: "Estratégias de social",
    date: new Date(),
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir, Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir, Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir,  Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir",
    redirect: "/",
    subject: "ESTRATÉGIAS DE SOCIAL MEDIA",
    cover: image1.src
  },
]

const Main = (): JSX.Element => {
  return (
    <S.Main>

      <div className="content">
        <TitleSection
          subTitle="Tech Legion"
          title="Blog"
        />
        <div className="posts-main-blog">
          <div className="feed-posts">
            <FeedCarousel />
          </div>
          <div className="list-articles">
            {
              articles.map((article, index) => (
                <ArticlePost article={article} key={index} />
              ))
            }
          </div>
        </div>
        <div className="list-all-articles">
          {
            articlesComplet.map((article, index) => (
              <ArticlePost article={article} key={index} limitLineDescription={10} />
            ))
          }
        </div>
        <div className="call-for-writers">
          <nav>
            <Link href="/blog/auth">Você é um(a) redator(a) da Tech Legion?</Link>
            <Link href={"/"}>Deseja se tornar um(a)?</Link>
          </nav>
          <i className='bx bxs-notepad'></i>
        </div>
      </div>
    </S.Main >
  )
}

export default Main