import { useState } from "react"

import imageTeste1 from "@/assets/images/about/team-young-cheerful-managers-sitting-couch-office-1024x1536.webp"
import imageTeste2 from "@/assets/images/about/woman-higher-education-teamwork-designer-folded-tech-legion-br.webp"
import imageTeste3 from "@/assets/images/about/young-african-american-female-entrepreneur-freelancer-working-using-laptop-coworking-space.webp"
import Button from "@/components/Button"


import * as S from "./styles"


interface TypePost {
  id: string,
  image: string,
  title: string,
  prevDescription: string
}

const posts: TypePost[] = [
  {
    id: "faloeqlvm324",
    image: imageTeste1.src,
    title: "Por que ter um site profissional é essencial para o seu negócio?",
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir em alta demanda, através de um único clique, as Estratégias de Social Media para as Redes Sociais se tornaram grandes aliadas ao mercado de consumo, físico e digital e essencial para o crescimento de grandes marcas."
  },
  {
    id: "3242gdgthrdfjk",
    image: imageTeste2.src,
    title: "Estratégias de social media para impulsionar marcas",
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir em alta demanda, através de um único clique, as Estratégias de Social Media para as Redes Sociais se tornaram grandes aliadas ao mercado de consumo, físico e digital e essencial para o crescimento de grandes marcas."
  },
  {
    id: "4fo0wei4sdfacnça",
    image: imageTeste3.src,
    title: "Desenvolvimento de site: construindo a presença digital de sua empresa",
    prevDescription: "Com o crescente fortalecimento das tecnologias, imediatismo do consumidor e facilidade de consumir em alta demanda, através de um único clique, as Estratégias de Social Media para as Redes Sociais se tornaram grandes aliadas ao mercado de consumo, físico e digital e essencial para o crescimento de grandes marcas."
  },
]

interface PropsPost {
  post: TypePost
}

const Post = ({ post }: PropsPost): JSX.Element => {
  return (
    <S.Post
      backgroundImg={post.image}
    >
      <div className={`popup-post translate-y`}>
        <h3>{post.title}</h3>
        <p>{post.prevDescription}</p>
        <Button className="button-know-more" hover="transparent">Leia Mais</Button>
      </div>
    </S.Post>
  )
}

const FeedCarousel = (): JSX.Element => {
  const [currentPost, setCurrentPost] = useState(0)
  const handleTranslateFeed = (direction: "left" | "right"): void => {
    setCurrentPost(prevCurrent => {
      const current = direction === "left" ? prevCurrent - 1 : prevCurrent + 1
      return (
        current < 0 ? posts.length - 1 :
          current > posts.length - 1 ? 0 : current
      )
    })
  }
  return (
    <S.FeedCarousel>
      <Post post={posts[currentPost]} key={currentPost} />

      <button className="btn-controller-feed btn-direction-left" onClick={() => { handleTranslateFeed("left"); }} ><i className='bx bx-chevron-left'></i></button>
      <button className="btn-controller-feed btn-direction-right" onClick={() => { handleTranslateFeed("right"); }}><i className='bx bx-chevron-right' ></i></button>
      <ul className="current-feed">
        {
          posts.map((_post, index) => (
            <li
              key={index}
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