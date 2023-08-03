import { color, font } from '@/styles/root';
import styled from 'styled-components';

export const EditorPreview = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: #141e4d;
  width: 370px;
  border-radius: 0.4rem;
  padding: 0.8rem 3rem 0.8rem 1rem;
  border: 1px solid #00ddff8d;
  position: relative;
  opacity: .7;
  transition: .2s;
  &:hover{
    opacity: 1;
  }
  .stamp {
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    background-color: ${color.secondary};
    width: 20px;
    height: 20px;
    color: ${color.light};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }
  .profile {
    width: 50px;
    flex: none;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .infos-personal {
    width: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    gap: .1rem;
    span, a {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${font.size.xsm};
      line-height: ${font.line_height.xsm};
      font-weight: bold;
    }
    .name {
      text-transform: capitalize;
      color: ${color.third}
    }
    .whatsapp {
      display: flex;
      align-items: center;
      gap: .3rem;
      color: ${color.success};
      i{
       font-size: 1.1rem;
      }
    }
  }
`;
