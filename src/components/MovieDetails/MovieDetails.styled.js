import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  padding: 10px;
  margin: 8px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: lightblue;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid;
  margin-bottom: 30px;
`;

export const Disc = styled.p`
  margin-bottom: 30px;
`;

export const AddInformBox = styled.div`
  border-bottom: 1px solid;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  color: black;
  :hover {
    color: blue;
  }
`;
