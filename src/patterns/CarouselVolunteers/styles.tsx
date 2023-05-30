import { breackScreens, color } from "@/styles/root";
import styled from "styled-components";


export const CarouselVolunteers = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 4rem;
  .controller{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    background-color: #2e2e6c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
    border: 1.2px solid #ffffff1f;
    color: ${color.third}
    
  }
  .controller-left{
    left: 0;
  }
  .controller-right{
    right: 0;
  }
  .content-carousel{
    width: calc((200px * 3) + 2rem * (3 - 1));
    display: flex;
    gap: 2rem;
    overflow: hidden;
    scroll-behavior: smooth;
    @media (max-width: ${breackScreens.tablet}) {
      width: calc((200px * 2) + 2rem * (2 - 1));
    }
    @media (max-width: ${breackScreens.smart}) {
      width: calc((200px * 1) + 2rem * (1 - 1));
    }
  }
`

export const CardVolunteer = styled.div`
  flex: none;
  width: 200px;
  height: 270px;
  background-color: #1f1f59;
  border-radius: .6rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1.3px solid #7470f77e;
  text-align: center;
  .profile-image{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h4{
    margin-top: 1rem;
  }
  h5{
    font-size: .7rem;
    color: ${color.third}
  }
  nav{
    margin-top: .5rem;
    display: flex;
    gap: .5rem;
    a{
      width: 30px;
      height: 30px;
      background-color: ${color.third};
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${color.primary};
      opacity: .7;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
  }
`