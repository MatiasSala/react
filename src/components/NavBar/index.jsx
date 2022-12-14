import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';

function NavBarEcomerce() {
return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Sala Motors</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">0km</Nav.Link>
                <Nav.Link href="#pricing">Usados</Nav.Link>
            </Nav>
        </Container>
        <CartWidget/>
    </Navbar>
    </>
);
}

export default NavBarEcomerce;