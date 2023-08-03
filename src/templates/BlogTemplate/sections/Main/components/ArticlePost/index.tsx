

import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router"

import * as S from "./style"
import { type ArticlePostType } from "./types"

interface ArticlePostProps {
  article: ArticlePostType,
  limitLineDescription?: number;
}

const ArticlePost = ({ article, limitLineDescription = 3 }: ArticlePostProps): JSX.Element => {
  const { title, prevDescription, redirect, subject, cover } = article

  const router = useRouter()

  const handleClickArticle = (): void => {
    void router.push(redirect)
  }

  return (
    <S.ArticlePost onClick={handleClickArticle} limitLineDescription={limitLineDescription}>
      {
        cover && (
          <Image src={cover} alt={"imagem de capa"} width={200} height={200} />
        )
      }
      <h4>{title}</h4>
      <small><span>{"JUN 7, 2023"}</span>|<span>{subject}</span></small>
      <p>{prevDescription}</p>
      <Link href={redirect}>Ler Mais</Link>
    </S.ArticlePost>
  )
}

export default ArticlePost