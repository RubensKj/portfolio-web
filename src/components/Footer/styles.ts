import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 87px;

  transition: 0.2s padding;

  @media only screen and (max-width: 1280px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 520px) {
    padding: 5px 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 87px;
  height: 100%;
  max-width: 1225px;

  border-top: 1px solid rgba(90,94,115,0.09);
  padding: 15px 5px;

  @media only screen and (max-width: 520px) {
    text-align: center;
    flex-direction: column;
  }
`;


export const Text = styled.span`
  font-size: 15px;
  color: #8492A6 !important;

  @media only screen and (max-width: 520px) {
    margin-bottom: 15px;
  }
`;

export const Strong = styled.strong`
  color: #49e287;
`;

export const UlList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 25px;
`;

export const Redirect = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

