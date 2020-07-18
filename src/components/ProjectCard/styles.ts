import styled from 'styled-components';

interface Props {
  svg?: string;
}

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${(props: Props) => props.svg}) bottom center;
  background-color: #23212b;
  background-size: 100%;

  border-radius: 8px;
  border: 1px solid #2c2b35;
  width: 100%;
  height: 100%;

  padding: 5px 0;

  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 19px 2px;

  transition: 0.2s transform;

  :hover {
    transform: translateY(-2px);
  }
`;

export const LanguageArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 5px 15px 5px;
`;

export const SVGArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2b35;

  padding: 15px;
  border-radius: 10px;

  text-transform: uppercase;
  font-weight: bold;
  color: rgba(90,94,115,0.70);
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 15px 5px;

  width: 100%;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: #FFF;

  /* font-family: 'Fira Code',monospace; */
  font-weight: 500;

  /* No break lines */
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FullPath = styled.span`
  font-size: 14px;
  color: #8492A6 !important;

  /* No break lines */
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 5px 15px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: #8492A6 !important;
  flex: 1;

  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;



