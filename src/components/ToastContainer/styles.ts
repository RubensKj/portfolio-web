import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 52px;
  padding: 30px;
  overflow: hidden;

  z-index: 150;

  @media only screen and (max-width: 550px) and (min-width: 0px) {
    padding: 30px 15px;
  }
`