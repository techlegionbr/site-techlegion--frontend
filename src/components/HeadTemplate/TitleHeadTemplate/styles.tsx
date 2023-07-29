import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


export const TitleHeadTemplate = styled.div`
  width: 100%;
  margin-top: 2rem;
  border-bottom: 3px solid #162e5a;
  .head-tab{
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: .7rem;
    width: 250px;
    background-color: #162e5a;
    padding: .5rem;
    border-radius: .4rem .4rem 0 0;
    cursor: default;
    .logo-tab{
      width: 30px;
      height: 30px;
      flex: none;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .title{
      font-size: .9rem;
      white-space: nowrap;
      width: calc(100% - 30px);
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .popup-title{
      position: fixed;
      width: 150px;
      background-color: ${color.dark};
      padding: .5rem 1rem;
      border-radius: .4rem;
      font-size: .9rem;
      pointer-events: none;
      z-index: 10;
      ${presenceAnimation({
  animation: "opacity",
  duration: .3
})
  }
    }
  }
  
`