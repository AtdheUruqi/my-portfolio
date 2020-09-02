import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style/styles.css';
const Header = ({ colorBackground, fontColor }) => {
    return (
        <>
            <Navbar fixed="top" className="justify-content-center" style={{ backgroundColor: colorBackground }}>
                <Nav>
                    <Nav.Link href="#home">
                        <span className={'header_nav'}> What i do</span>
                    </Nav.Link>
                    <Nav.Link href="#Portfolio">
                        <span className={'header_nav'}> Portfolio</span>
                    </Nav.Link>
                    <Nav.Link href="#About">
                        <span className={'header_nav'}> About</span>
                    </Nav.Link>
                    <Nav.Link href="#Blog">
                        <span className={'header_nav'}> Blog</span>
                    </Nav.Link>
                    <Nav.Link href="#Contact">
                        <span className={'header_nav'}> Contact</span>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;