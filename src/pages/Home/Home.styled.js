import styled from "styled-components";
import { Link} from 'react-router-dom';

export const HomeTitle = styled.h2`
    padding-left: 50px;
    font-size: 20px;
`
export const HomeLi = styled(Link)`
font-size: 16px;
color: black;
:hover{
    color: blue;
}
`;