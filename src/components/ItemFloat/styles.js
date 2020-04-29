import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  box-shadow: 0 30px 40px 0 rgba(31, 45, 61, 0.1);
  border-radius: 50%;

  background: ${props => props.background ? props.background : "#FFF"};

  top: ${props => props.top ? props.top + 'px' : null};
  bottom: ${props => props.bottom ? props.bottom + 'px' : null};
  left: ${props => props.left ? props.left + 'px' : null};
  right: ${props => props.right ? props.right + 'px' : null};

  width: ${props => props.width ? props.width + 'px' : null};
  height: ${props => props.height ? props.height + 'px' : null};

  padding: 5px 15px;
  overflow: hidden;

  transition: 0.2s margin-right;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Animation */
  animation: floating 3s ease alternate infinite;
  will-change: transform;

  /* The floating effect */
  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  /* Configuring nth-child */
  :nth-child(1) {
    animation-delay: 0.5s;
  }

  :nth-child(2) {
    animation-delay: 1s;
  }

  :nth-child(3) {
    animation-delay: 1.5s;
  }

  :nth-child(4) {
    animation-delay: 2s;
  }

  :nth-child(5) {
    animation-delay: 2.5s;
  }
  
  /* Responsive style */
  @media only screen and (max-width: 1280px) {
    position: initial;
    top: initial;
    margin-left: initial;
    margin-right: 20px;

    width: 120px;
    height: 120px;
  }

  @media only screen and (max-width: 720px) {
    position: initial;
    margin-right: initial;
  }
`;