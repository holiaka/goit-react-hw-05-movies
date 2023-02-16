
import { Outlet } from "react-router-dom";
import { Container, HeaderNav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <header>
                <HeaderNav>                    
                    <Link to="/">Home</Link>
                    <Link to="movies">Movies</Link>
                </HeaderNav>
            </header>
            <Outlet />
        </Container>
    );
};