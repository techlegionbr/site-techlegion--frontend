import Post from "./components/Post"
import * as S from "./styles"


const MyPosts = (): JSX.Element => {
  return (
    <S.ListPosts>
      <h4>Meus posts <span> | 03</span></h4>
      <ul className="posts-list">
        <Post />
        <Post />
        <Post />
      </ul>
    </S.ListPosts>
  )
}

export default MyPosts