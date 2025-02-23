import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css'; // the custom import file
import '../styles/NavBar.css'; // the custom import file
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [isThemeInitialized, setIsThemeInitialized] = useState(false); // Track if the theme is ready

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    setIsThemeInitialized(true); // Mark theme as initialized
  }, []);

  useEffect(() => {
    if (isThemeInitialized) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, isThemeInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (!isThemeInitialized) {
    // Avoid rendering the component until the theme is initialized
    return null;
  }

  return (
    <Navbar expand="lg" className="footer-header-color">
      <Container fluid>
        <div className="dark-switch">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <FontAwesomeIcon icon={faMoon} style={{ marginRight: '10px' }} />
            <FontAwesomeIcon icon={faSun} />
            <span className="ball"></span>
          </label>
        </div>

        <Navbar.Brand className="navbar-brand bold" href="#">
          Abhi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll>
            <Nav.Link className="nav-link bold-links" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/tech">
              Tech
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/project">
              Project
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/life">
              Life
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-border form-control custom-placeholder"
              aria-label="Search"
            />
            <Button className="button-custom-color">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;