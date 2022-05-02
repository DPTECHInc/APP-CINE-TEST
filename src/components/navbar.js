import { Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GetFilmsDetail } from "../api/moviesdatabase";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [searchedMovies, setSearchedMovies] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(searchedMovies);
        GetFilmsDetail(searchedMovies);
        navigate("/films/details");
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <FaHome />
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/films/list">Films à l'actus</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setSearchedMovies(e.target.value)}
                    value={searchedMovies ?? ""}
                    placeholder="Rechercher un film"
                />

                <button type="submit">Rechercher un film</button>
            </form>
        </div>
    );
};
