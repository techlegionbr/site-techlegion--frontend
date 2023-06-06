export const presenceOpacity = `
  @keyframes opacity_presence{
    0%{ opacity: 0; }
    100%{ opacity: 1; }
  }
  animation: opacity_presence .4s ease;
`;
export const presenceScale = `
  @keyframes scale_presence{
    0%{ 
      opacity: 0; 
      transform: scale(0);
    }
    100%{ 
      opacity: 1; 
      transform: scale(1);
    }
  }
  animation: scale_presence .4s ease;
`;

export const presenceTranslateLeft = `
  @keyframes translate_left_presence{
    0%{ 
      opacity: 0; 
      transform: translate(-100%);
    }
    100%{ 
      opacity: 1; 
      transform: translate(0);
    }
  }
  animation: translate_left_presence .4s ease;
`;
