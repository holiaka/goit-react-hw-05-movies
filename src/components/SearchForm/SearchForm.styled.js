import styled from 'styled-components'

export const Input = styled.input`
    min-width: 300px;
    padding: 10px;
    font-size: 16px;
`;

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