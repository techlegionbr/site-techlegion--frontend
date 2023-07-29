import { color, font, screens } from '@/styles/root';
import styled from 'styled-components';

export const FormContact = styled.form`
  width: 100%;
  display: grid;
  grid-template-areas: 'input-name input-email' 'input-whatsapp input-whatsapp' 'textarea-message textarea-message' "btn-form btn-form";
  gap: 0.5rem;
  position: relative;
  grid-template-columns: 0.5fr 0.5fr;
  @media (max-width: ${screens.md}) {
    grid-template-columns: 1fr;
    grid-template-areas: "input-name" "input-email" "input-whatsapp" "textarea-message" "btn-form";
  }
  .pop-up-troll{
    position: absolute;
    width: calc(100% + .4rem);
    height: calc(100% + .4rem);
    top: -.2rem;
    left: -.2rem;
    backdrop-filter: blur(1px);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (max-width: ${screens.sm}) {
      padding: 0;
    }
    .card{
      padding: 3rem 1rem;
      width: 600px;
      border: 1.4px solid #ffffff1a;
      border-radius: .8rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transform: rotate(-4deg);
      backdrop-filter: blur(20px);
      .title{
        font-weight: bold;
        font-size: ${font.size.md};
        line-height: ${font.line_height.md};
        text-transform: uppercase;
        @media (max-width: ${screens.sm}) {
          font-size: calc(${font.size.md} - .2rem);
          line-height: calc(${font.line_height.md} - .2rem);
        }
        del{
          text-decoration: none;
          position: relative;
          &::after{
            content: "";
            width: 100%;
            height: 3px;
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        span{
          color: ${color.third}
        }
      }
      .btn-contact{
        margin-top: 2rem;
      }
    }
  }
  #input-name,
  #input-email,
  #input-whatsapp,
  #btn-form,
  #textarea-message {
    width: 100%;
  }
  #input-name {
    grid-area: input-name;
  }
  #input-email {
    grid-area: input-email;
  }
  #input-whatsapp {
    grid-area: input-whatsapp;
  }
  #textarea-message {
    grid-area: textarea-message;
  }
  .button-form {
    grid-area: btn-form;
    width: 100px;
    margin-top: 1rem;
  }
`;
