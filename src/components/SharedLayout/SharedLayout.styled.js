import { NavLink } from "react-router-dom";
import styled from "styled-components"


export const Container = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`

export const HeaderNav = styled.header`
    display: flex;
    gap: 20px;
`

export const Link = styled(NavLink)`
    font-size: 20px;
    font-weight: 700;
`;