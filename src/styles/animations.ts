import { keyframes } from '@emotion/react';

export const slideUp = keyframes`
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0%;
  }
`;

export const slideDown = keyframes`
  0% {
    bottom: 0%;
  }
  100% {
    bottom:-100%;
  }
`;

export const slideIn = keyframes`
  0% {
    transform: translateY(-100px);
  }

  100% {
    transform: translateY(70px);
  }
`;

export const fadeOut = keyframes`
  0% {
    transform: translateY(70px);
    opacity: 1;
  }

  100% {
    transform: translateY(70px);
    opacity:0;
  }
`;
