import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1225px;
  margin: 0 auto 55px;

  padding-bottom: 50px;

  border-bottom: 1px solid rgba(90, 94, 115, 0.09);
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));

  padding: 5px 15px;
  gap: 15px;
`;