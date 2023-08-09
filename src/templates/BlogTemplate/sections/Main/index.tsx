import { useEffect, useMemo } from "react"

import TitleSection from "@/components/TitleSection"
import { textEditorUtil } from "@/patterns/TextEditor/utils"
import useAllPostsPublicQuery from "@/queries/post/useAllPostsPublicQuery"
import { genericImagesBlog } from "@/settings/blog/genericImages"
import useHomeStore from "@/stores/useHomeStore"

import Link from "next/link"

import ArticlePost from "./components/ArticlePost"
import FeedCarousel from "./components/FeedCarousel"
import { SkeletonComponentBlog } from "./components/Skeleton"
import * as S from "./style"
import { type IArticlePostType } from "./types"




const Main = (): JSX.Element => {
  const { data: postsData, isLoading: isLoadingPosts } = useAllPostsPublicQuery()
  const [allPosts, setAllPosts] = useHomeStore(state => [state.allPosts, state.setAllPosts])

  const [allArticles, mainArticles, mainArticlesSecondary] = useMemo<Array<IArticlePostType[] | null>>(() => {
    const allArticles = allPosts?.map(post => ({
      date: new Date(post.createdAt),
      prevDescription: post.head.description,
      redirect: `/blog/post/${post.route.name}`,
      subject: "fadsf",
      title: post.head.title,
      id: post._id,
      cover: textEditorUtil.extractImagesFromContentRawString(post.content.rawString)[0]?.src ?? genericImagesBlog.cover
    }))
    if (!allArticles) return [null, null]
    const mainArticles: IArticlePostType[] = []
    for (let i = 0; i <= 2; i++) {
      mainArticles.push(allArticles[i])
    }

    const mainArticlesSecondary: IArticlePostType[] = []
    for (let i = 0; i <= 2; i++) {
      mainArticlesSecondary.push({ ...allArticles[i], cover: undefined })
    }


    return [allArticles, mainArticles, mainArticlesSecondary]

  }, [allPosts])

  useEffect(() => {
    if (postsData) {
      setAllPosts(postsData)
    }
  }, [postsData, setAllPosts])
  return (
    <S.Main>

      <div className="content">
        <TitleSection
          subTitle="Tech Legion"
          title="Blog"
        />
        <div className="posts-main-blog">
          {
            mainArticles && (
              <div className="feed-posts">
                <FeedCarousel articles={mainArticles} />
              </div>
            )
          }
          <div className="list-articles">
            {
              isLoadingPosts && !mainArticlesSecondary ? (
                <>
                  <SkeletonComponentBlog.ArticlePost />
                  <SkeletonComponentBlog.ArticlePost />
                  <SkeletonComponentBlog.ArticlePost />
                </>
              ) : <></>
            }
            {
              mainArticlesSecondary?.map(article => (
                <ArticlePost article={article} key={`article-post-${article.id}`} />
              ))
            }
          </div>
        </div>
        <div className="list-all-articles">
          {
            isLoadingPosts && !allArticles ? (
              <>
                <SkeletonComponentBlog.ArticlePost cover />
                <SkeletonComponentBlog.ArticlePost cover />
                <SkeletonComponentBlog.ArticlePost cover />
              </>
            ) : <></>
          }
          {
            allArticles?.map(article => (
              <ArticlePost article={article} key={`article-post-${article.id}`} limitLineDescription={10} />
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