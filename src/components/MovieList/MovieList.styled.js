import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 16px;
  color: black;
  :hover {
    color: blue;
  }
`;