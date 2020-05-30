import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: #141729;

  svg {
    /* Animation */
    animation: scaling 1s ease alternate infinite;
    will-change: transform;
  }

  @keyframes scaling {
    from {
      transform: scale(0.85);
    }
    to {
      transform: scale(1.25);
    }
  }
`;
