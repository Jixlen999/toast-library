import styled from 'styled-components';

export const Button = styled.div`
  width: ${({ theme }) => theme.width[0]}px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.margin[2]}px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  color: ${({ theme }) => theme.whiteColor};
  padding: ${({ theme }) => theme.padding[1]}px;
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  background: ${({ theme }) => theme.lightPinkColor};
  box-shadow: 0 ${({ theme }) => theme.boxShadow[2]}px
    ${({ theme }) => theme.darkPinkColor} inset;
  transition: ${({ theme }) => theme.transition[0]}s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.darkPinkColor};
  }
`;
