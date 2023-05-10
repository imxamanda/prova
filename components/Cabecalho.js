import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/anime">Anime World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/anime"> Animes </Nav.Link>
            <Nav.Link href="/generos"> Gêneros </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>


  )
}

export default Cabecalho