

import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router"

import { type IArticlePostType } from "../../types";
import * as S from "./style"


interface ArticlePostProps {
  article: IArticlePostType,
  limitLineDescription?: number;
}

const ArticlePost = ({ article: { title, prevDescription, redirect, subject, cover }, limitLineDescription = 3 }: ArticlePostProps): JSX.Element => {

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
      <small><span>{"JUN 7, 2023"}</span>{subject && (<>|<span>{subject}</span></>)}</small>
      <p>{prevDescription}</p>
      <Link href={redirect}>Ler Mais</Link>
    </S.ArticlePost>
  )
}

export default ArticlePost