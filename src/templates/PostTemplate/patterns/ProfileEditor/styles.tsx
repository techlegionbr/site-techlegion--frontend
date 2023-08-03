import { color, font } from "@/styles/root";
import styled from "styled-components";


export const ProfileEditor = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  .profile-infos{
    span{
      display: block;
      font-size: ${font.size.xsm};
      line-height: ${font.line_height.xsm};
    }
    .name{
      text-transform: capitalize;
      font-weight: bold;
      font-size: ${font.size.sm};
      line-height: ${font.line_height.sm};
      color: ${color.third};
    }
  }
  .profile-img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

`