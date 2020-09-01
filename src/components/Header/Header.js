import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar  fixed="top" className="justify-content-center" bg="dark" variant="dark">
                <Nav >
                    <Nav.Link  href="#home">What i do</Nav.Link>
                    <Nav.Link  href="#features">Portfolio</Nav.Link>
                    <Nav.Link  href="#pricing">About</Nav.Link>
                    <Nav.Link  href="#pricing">Blog</Nav.Link>
                    <Nav.Link  href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;