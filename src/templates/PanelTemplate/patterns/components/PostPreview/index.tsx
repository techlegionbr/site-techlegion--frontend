import { forwardRef } from "react"

import LegendItem from "@/components/LegendItem"
import abbreviateName from "@/utils/abbreviateName"

import Image from "next/image"
import Link from "next/link"

import * as S from "./styles"
import { type IPostPreviewProps } from "./types"



const PostPreview = forwardRef<HTMLLIElement, IPostPreviewProps>(({ post: { title, description, likes, deslikes, comments, shares, profileEditor, nameRoute }, ...restProps }, ref): JSX.Element => {
  return (
    <S.Post {...restProps} ref={ref}>
      <div className="infos-main">
        <span className="title-post">{title}</span>
        <span className="description-post">{description}</span>
      </div>
      <div className="infos-tech">
        <div className="profile-editor">
          <div className="profile-img">
            <Image src={profileEditor.image} alt={profileEditor.name} width={30} height={30} />
          </div>
          <span className="name-editor">Publicado por <span className="capitalize-name">{abbreviateName(profileEditor.name)}</span></span>
        </div>
        <ul className="display-statistics">
          <LegendItem legend={`${likes} likes`} sizeLegend="sm">
            <li><i className='bx bxs-like'></i>{likes}</li>
          </LegendItem>
          <LegendItem legend={`${deslikes} deslikes`} sizeLegend="sm">
            <li><i className='bx bxs-dislike' ></i>{deslikes}</li>
          </LegendItem>
          <LegendItem legend={`${comments} comentários`} sizeLegend="sm">
            <li><i className='bx bxs-comment' ></i>{comments}</li>
          </LegendItem>
          <LegendItem legend={`${shares} compartilhamentos`} sizeLegend="sm">
            <li><i className='bx bxs-share-alt' ></i>{shares}</li>
          </LegendItem>

        </ul>
      </div>
      <div className="controllers">
        <Link href={`/blog/post/${nameRoute}`} target="_blank">Visitar</Link>
      </div>
    </S.Post>
  )
}
)

PostPreview.displayName = "PostPreview"

export default PostPreview