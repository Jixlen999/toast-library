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
    color: ${({ iconAndTextColor }) =>
      iconAndTextColor ? iconAndTextColor : '#fafafa'};
  }
  padding: 15px;
  margin: ${({ spacing }) =>
      spacing && spacing >= 0 && spacing <= 200 ? spacing : 5}px
    0;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  width: 350px;
  min-height: 40px;
  height: auto;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : chooseColor(props.variant)};
  border-radius: 3px;
  box-shadow: 0 0 10px #999;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 15px #999;
  }
  animation: ${({ animation }) =>
    (animation === 'slideRight' && slideAnimation()) ||
    (animation === 'bounceRight' && bounceAnimation()) ||
    (animation === 'fadeIn' && fadeInAnimation())};
`;

export const Text = styled.p`
  font-size: 16px;
  height: auto;
`;
export const Icon = styled.p`
  font-size: 40px;
  margin: 0;
  height: auto;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  height: auto;
`;

export const CloseButton = styled.div`
  align-self: flex-start;
  cursor: pointer;
  font-size: 18px;
  color: white;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.3s ease;
`;
export const TextContainer = styled.div`
  width: 100%;
`;
