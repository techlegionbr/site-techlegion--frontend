import { presenceAnimation } from '@/animations/presence';
import { color } from '@/styles/root';
import styled from 'styled-components';

export const AlertNewEntitieRoot = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #08082930;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 500px;
    background-color: #11133a;
    border: 1px solid #f2f6f82d;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    ${presenceAnimation({
  animation: 'scale',
  duration: 0.3
})}
  }
`;

export const AlertNewEntitieProfile = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3.5px solid #f2f6f82d;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AlertNewEntitieField = styled.div`
  width: 100%;
  background-color: #0a224183;
  padding: 0.6rem 1rem;
  border: 1px solid #f2f6f82d;
  position: relative;
  border-radius: 0.4rem;
  .label {
    width: 100%;
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: bold;
    color: ${color.third};
    display: block;
  }
  .value-text {
    display: inline-block;
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
  .btn-copy {
    position: absolute;
    right: 1rem;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 25px;
    height: 25px;
    color: ${color.dark};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.third};
    font-size: 0.8rem;
    opacity: 0.7;
    transition: 0.2s;
    &:hover {
      opacity: 1;
    }
    .message-copy{
      position: absolute;
      color: ${color.light};
      white-space: nowrap;
      background-color: ${color.dark};
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      font-size: .5rem;
      border-radius: .2rem;
      padding: .1rem .5rem;
      top: -1.3rem;
      ${presenceAnimation({
  animation: "scale",
  duration: .2
})
  }
    }
  }
`;


export const AlertNewEntitieButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  button{
    background-color: ${color.third};
    color: ${color.dark};
    padding: .4rem 1rem;
    border-radius: 0.4rem;
    font-size: .8rem;
    font-weight: bold;
    text-transform: uppercase;
    opacity: .7;
    transition: .2s;
    &:hover{
      opacity: 1;
    }
  }

`