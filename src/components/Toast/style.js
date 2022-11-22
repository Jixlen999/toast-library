import styled from 'styled-components';
import {
  fadeInAnimation,
  bounceAnimation,
  slideAnimation,
} from '@utils/chooseAnimation';
import chooseColor from '@utils/chooseColor';

export const ToastWrapper = styled.div`
  & * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ iconAndTextColor, theme }) =>
      iconAndTextColor ? iconAndTextColor : theme.whiteColor};
  }
  padding: ${({ theme }) => theme.padding[1]}px;
  margin: ${({ spacing, theme }) =>
      spacing && spacing >= 0 && spacing <= 200 ? spacing : theme.margin[1]}px
    0;
  display: flex;
  gap: ${({ theme }) => theme.gap[0]}px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  width: ${({ theme }) => theme.width[1]}px;
  min-height: ${({ theme }) => theme.height[0]}px;
  height: auto;
  background-color: ${({ bgColor, variant }) =>
    bgColor ? bgColor : chooseColor(variant)};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: 0 0 ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.shadowColor};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition[0]}s ease;
  &:hover {
    box-shadow: 0 0 ${({ theme }) => theme.boxShadow[1]}px
      ${({ theme }) => theme.shadowColor};
  }
  animation: ${({ animation }) =>
    (animation === 'slideRight' && slideAnimation()) ||
    (animation === 'bounceRight' && bounceAnimation()) ||
    (animation === 'fadeIn' && fadeInAnimation())};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize[0]}px;
  height: auto;
`;
export const Icon = styled.p`
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  margin: 0;
  height: auto;
`;
export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  height: auto;
`;

export const CloseButton = styled.div`
  align-self: flex-start;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  color: ${({ theme }) => theme.whiteColor};
  &:hover {
    transform: scale(1.1);
  }
  transition: all ${({ theme }) => theme.transition[1]}s ease;
`;
export const TextContainer = styled.div`
  width: ${({ theme }) => theme.width[0]}%;
`;
