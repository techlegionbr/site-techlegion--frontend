
import { presenceTranslateDown } from "@/animations/presence";
import { screens } from "@/styles/root";
import styled from "styled-components";


export const FeedCarousel = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 1rem;
  border: 1.4px solid #7c92ff66;
  position: relative;
  &:hover > .btn-direction-left, &:hover > .btn-direction-right{
      transform: translate(0);
  }
  .btn-controller-feed{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 2.2rem;
    transition: .2s;
  }
  .btn-direction-left{
    left: .5rem;
    transform: translate(-100%);
    @media (max-width: ${screens.md}) {
      left: 0rem;
      transform: translate(0);
    }
  }
  .btn-direction-right{
    right: .5rem;
    transform: translate(100%);
    @media (max-width: ${screens.md}) {
      right: 0rem;
      transform: translate(0);
    }
  }

  .current-feed{
    position: absolute;
    width: 100%;
    bottom: 1rem;
    gap: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .mark-current{
      background-color: #fff;
    }
    li{
      width: 8px;
      height: 8px;
      background-color: #ffffff93;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`

interface PostProps {
  backgroundImg: string
}

export const Post = styled.div<PostProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ backgroundImg }) => backgroundImg});

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8%;
  transition: .2s;
  .popup-post{
    background-color: #121247eb;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    border: 1.5px solid #7088f338;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    opacity: 0;
    ${presenceTranslateDown};
    p{
      margin-top: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .button-know-more{
    margin-top: 2rem;
  }

`