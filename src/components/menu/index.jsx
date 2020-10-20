import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../../assets/img/logo.jpg'

const Menu = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="" style={{width : '50px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;