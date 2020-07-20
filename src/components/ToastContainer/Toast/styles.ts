import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

import Mask from '../../../assets/BackgroundProject/Mask.png';

interface ContainerProps {
  type?: 'success' | 'error' | 'info'
  hasdescription: number
}

const toastTypeVariations = {
  info: css`
    background-color: #23212b;
    color: #fdbc40;
  `,
  success: css`
    background-color: #23212b;
    color: #02b86b;
  `,
  error: css`
    background-color: #23212b;
    color: #fc615d;
  `,
}

export const Container = styled(animated.div) <ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 360px;
  max-height: 250px;
  overflow: auto;

  padding: 10px 15px;
  border-radius: 4px;

  background: url(${props => Mask}) bottom center;
  background-size: 100%;
  color: #8492A6;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}
  > svg {
    margin-right: 15px;
  }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;

      max-width: 100%; 
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
  
  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}


  @media only screen and (max-width: 550px) and (min-width: 0px) {
    width: 280px;
  }
`