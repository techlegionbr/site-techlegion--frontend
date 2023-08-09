import CustomHead from "@/components/CustomHead"
import { Layout } from "@/patterns/Layout"
import { type IPostPublic } from "@/types/IPost"

import ContentPost from "./patterns/ContentPost"
import ControllerActions from "./patterns/ControllerActions"
import ProfileEditor from "./patterns/ProfileEditor"
import * as S from "./styles"
interface IPostTemplateProps {
  post: IPostPublic
}


const PostTemplate = ({ post }: IPostTemplateProps): JSX.Element => {

  return (
    <>
      <CustomHead
        title={post.head.title}
        description={post.head.description}
      />
      <Layout.Header />
      <S.PostTemplate>
        <div className="content">
          <ProfileEditor
            name={post.profileEditor.name}
            image={post.profileEditor.image}
          />
          <ContentPost
            post={{
              content: post.content,
              createdAt: post.createdAt,
              head: post.head,
              profileEditor: post.profileEditor
            }}
          />
          <ControllerActions
            quantity={{
              likes: post.likes.length,
              deslikes: post.dislikes.length,
              shares: post.shares.length,
              views: post.views.length
            }}
          />
        </div>
      </S.PostTemplate>
    </>
  )
}


export default PostTemplate