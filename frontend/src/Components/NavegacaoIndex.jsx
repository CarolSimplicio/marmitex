import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../CSS/NavegacaoIndex.css";

function Header() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
      if (window.scrollY >= 80) {
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Navbar className={navbar ? 'active' : ''} data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand><Link to="/">Tem Café</Link></Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/contato">Contato</Link></Nav.Link>
            <Nav.Link><Link to="/listaUsuarios">Lista de Usuários</Link></Nav.Link>
            <Nav.Link><Link to="/Perfil">Perfil</Link></Nav.Link>
            <Nav.Link><Link to="/catalogo">Catálogo</Link></Nav.Link>
            <Nav.Link><Link to="/Pedidos">Pratos</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
