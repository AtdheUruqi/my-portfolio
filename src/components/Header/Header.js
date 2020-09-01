import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style/styles.css';

const Header = ({ colorBackground, fontColor }) => {
    return (
        <>
            <Navbar fixed="top" className="justify-content-center" style={{ backgroundColor: colorBackground }}>
                <Nav >
                    <Nav.Link className={'header_nav'} href="#home">What i do</Nav.Link>
                    <Nav.Link href="#features">Portfolio</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;