import styled from 'styled-components';

interface Props {
  checked?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  padding: 5px 15px;

  border-radius: 2px;

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    border-radius: 4px;

    cursor: pointer;

    label {
      width: 24px !important;
      height: 24px !important;

      border-radius: 4px;
      color: #e8eaeb;
      background: #2c2b35;
      border: 2px solid rgba(47,45,58,0.6);

      :after {
        content: "";
        margin-left: 6px;
        margin-top: -3px;
        display: none;
      }

      ${props => props.checked ? (
        'border: 2px solid #ff9000;'+
        ':after {' +
        'display: block;' +
        'left: 9px;' +
        'top: 5px;' +
        'width: 5px;' +
        'height: 10px;' +
        'border: solid white;' +
        'border-width: 0 3px 3px 0;' +
        '-webkit-transform: rotate(45deg);' +
        '-ms-transform: rotate(45deg);' +
        'transform: rotate(45deg);' +
        '}'
      ) : ''}
    }

    input {
      display: none;
    }

    span {
      margin-left: 8px;

      user-select: none;
    }
  }
`;