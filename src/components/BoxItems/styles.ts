import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 585px;
  margin: 0 auto;

  border: 1px solid #e8eaeb;
  border-radius: 4px;

  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 25px;
  width: 100%;
  height: 101px;

  border-bottom: 1px solid #e8eaeb;

  h1 {
    padding: 0;
  }
`;

export const Title = styled.h1`
  padding: 5px 15px;
  width: 100%;

  background: transparent;
  border: none;

  color: #555;

  font: 18px 'Poppins', sans-serif;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  width: 100%;
  min-height: 395px;
  max-height: 395px;
  height: 100%;
`;