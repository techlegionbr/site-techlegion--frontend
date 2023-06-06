import { presenceOpacity, presenceScale, presenceTranslateLeft } from "@/animations/presence"
import { color, font } from "@/styles/root"
import styled from "styled-components"

export const PopUpSearch = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #090826c3;
  z-index: 15;
  ${presenceOpacity};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  .card-search{
    width: 700px;
    height: 100%;
    background-color: #0c0e2e;
    border-radius: 1rem;
    padding: 1rem 2rem;
    border: 1px solid #2758fb3e;
    ${presenceScale};

    .input-search{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 44px;
      background-color: #1e1e60;
      padding: 0 1rem;
      border-radius: 1.6rem ;
      border: 1px solid #7167ff45;
      gap: .6rem;
      input{
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: ${color.light};
        &::placeholder{
          color: #ffffff6f;
        }
      }
      .icon-search{
        color: ${color.third};
      }
      .button-clear{
        font-size: 1.1rem;
        flex: none;
        background-color: #28226a;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #ffffff22;
        color: ${color.third};
        opacity: .6;
        transition: .2s;
        &:hover{
          opacity: 1;
        }
      }
    }
  }
`

export const ListSearched = styled.ul`
  margin-top: 2rem;
  overflow: auto;
  max-height: 500px;
  padding-right: .5rem;
  &::-webkit-scrollbar-track {
    background-color: #0b123c;
    border-radius: .3rem;
  }
  &::-webkit-scrollbar {
      width: 6px;
      border-radius: .3rem;
  }
  &::-webkit-scrollbar-thumb {
      background: #253ce73c;
  }
  .marked-resulted{
    background-color: #1256bc;
    a{
      color: #fff;
    }
  }
  .type-resulteds-searched{
    padding: .4rem 1rem;
    font-weight: bold;
    color: ${color.third};
    text-transform: uppercase;
    ${presenceTranslateLeft};
    background-color: #13163b;
    border-radius: .4rem;
    border: 1.3px solid #6a86f62d;
    font-size: .9rem;
    margin: .8rem 0;
  }
  .resulted-searched{
    width: 100%;
    border-radius: .5rem;
    ${presenceTranslateLeft};
    transition: .1s;
    display: flex;
    width: 100%;
    padding: .6rem 2rem;
    color: #ffffffc2;
    transition: .2s;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .icon-arrow{
      opacity: 0;
      transition: .2s;
    }
    &:hover{
      background-color: ${color.secondary};
      color: #fff;
      .icon-arrow{
        opacity: 1;
      }
    }
  }
  .not-searched{
    text-align: center;
    padding: 2rem 0;
    font-weight: bold;
    font-size: 1.1rem;
    color: #ffffff9a;
    ${presenceOpacity};
    pointer-events: none;
  }
  .not-result{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    ${presenceOpacity};
    text-align: center;
    .icon-search{
      font-size: 3rem;
      color: #2d3574;
      position: relative;
      &::after{
        content: "";
        position: absolute;
        width: 44px;
        height: 4px;
        background-color: #2d3574;
        left: calc(50% - .2rem);
        top: calc(50% - .3rem);
        transform: translate(-50%, -50%) rotate(160deg);
        border: 3px solid #0c0e2e;
      }
    }
    p{
      margin-top: .6rem;
      font-weight: bold;
      font-size: 1.1rem;
      font-family: ${font.family.Poppins};
      color: #ffffffd0;
      span{
        color: ${color.third}
      }
    }
  }
`