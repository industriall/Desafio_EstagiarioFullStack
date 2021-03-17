import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Occurrence</Navbar.Brand>
                <NavDropdown title="Opções" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </div>
    )
}

export default Navigation;

// deixa a barra transparente
// .navbar-inner {
//     background:transparent;
// }