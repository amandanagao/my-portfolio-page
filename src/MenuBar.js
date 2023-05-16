import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./css/MenuBar.css";

export default function MenuBar() {
    return (
        <div className="MenuBar">
            <Navbar collapseOnSelect expand="lg" className="MenuBar-navbar">
                    <Navbar.Brand className="MenuBar-brand" href="#home">
                        <span className="MenuBar-brand-first-letter">A</span>manda{" "}
                        <span className="MenuBar-brand-first-letter">N</span>agao
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="MenuBar-nav ms-auto">
                            <Nav.Link className="MenuBar-link" href="#AboutMe">About Me</Nav.Link>
                            <Nav.Link className="MenuBar-link" href="#Certifications">Certifications</Nav.Link>
                            <Nav.Link className="MenuBar-link" href="#Projects">Projects</Nav.Link>
                            <Nav.Link className="MenuBar-link" href="#ContactMe">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
}