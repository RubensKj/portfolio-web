import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LowerText = styled.h1`
  padding: 5px 25px;
  color: #5a5e73;
  transition: 0.2s padding, font-size;

  @media only screen and (max-width: 720px) {
    padding: 5px 15px;
    font-size: 16px;
  }
`;

export const CodeTextArea = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  @media only screen and (max-width: 720px) {
    h1 {
      font-size: 19px;
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const CodeNameArea = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  /* The typing effect */
  @keyframes typing {
    from { width: 0% }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #49e287; }
  }
`;

export const HigherText = styled.h1`
  display: flex;
  justify-content: left;
  font: 44px 'Source Code Pro', monospace;
  color: #49e287;
  -webkit-font-smoothing: antialiased !important;

  /* Transitions */
  transition: 0.2s font-size;

  svg {
    transition: 0.2s width, height;
  }


  /* Animation */
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .4em solid #49e287; /* The typwriter cursor */
  padding-right: 5px;
  white-space: nowrap; /* Keeps the content on a single line */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
`;