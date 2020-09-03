import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style/styles.css';
const Header = ({ colorBackground }) => {
    return (
        <>
            <Navbar  style={{ backgroundColor: colorBackground }}>
                <Navbar.Brand className={'nav-logo '}>
                    <img src={require('../../assets/logo2.png')} width="170" height="50" />
                </Navbar.Brand>
                <Nav className="justify-content-end" style={{ width: "80%" }}>
                    <Nav.Link href="home">
                        <span className={'header_nav'}> What i do</span>
                    </Nav.Link>
                    <Nav.Link href="Portfolio">
                        <span className={'header_nav'}> Portfolio</span>
                    </Nav.Link>
                    <Nav.Link href="About">
                        <span className={'header_nav'}> About</span>
                    </Nav.Link>
                    <Nav.Link href="Blog">
                        <span className={'header_nav'}> Blog</span>
                    </Nav.Link>
                    <Nav.Link href="Contact">
                        <span className={'header_nav'}> Contact</span>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;