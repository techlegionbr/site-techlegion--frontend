import { color } from "@/styles/root";
import styled from "styled-components";


interface ArticlePostProps {
  limitLineDescription: number
}

export const ArticlePost = styled.article<ArticlePostProps>`
  width: 100%;
  cursor: pointer;
  img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: .4rem;
    margin-bottom: 1rem;
  }
  h4{
    min-height: 40px;
  }
  small{
    display: flex;
    flex-wrap: wrap;
    margin-top: .5rem;
    font-weight: bold;
    color: ${color.third};
    gap: .4rem;
    text-transform: uppercase;
    font-size: .7rem;
    line-height: .7rem;
  }
  p{
    margin-top: .5rem;
    font-size: .85rem;
    display: -webkit-box;
    -webkit-line-clamp: ${({ limitLineDescription }) => limitLineDescription};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a{
    font-weight: bold;
    color: ${color.third};
    font-size: .8rem;
    text-decoration: underline;
    margin-top: .4rem;
    display: inline-block;
  }
`