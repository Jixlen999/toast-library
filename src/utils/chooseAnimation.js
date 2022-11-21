import { css, keyframes } from "styled-components";

const slideRight = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const bounceRight = keyframes`
0% {
    transform: translateX(600px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(68px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(32px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }`;

const fadeIn = keyframes`
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  } 
  `;

export const fadeInAnimation = () => css`
	${fadeIn} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both
`;

export const bounceAnimation = () => css`
	${bounceRight} 1.1s both
`;

export const slideAnimation = () => css`
	${slideRight} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
`;
