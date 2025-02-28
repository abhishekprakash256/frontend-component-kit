// NavBar.tsx
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'; // the custom import file
import '../styles/NavBar.css'; // the custom import file
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// Custom hook for routing (to be used both in Vite/React and Next.js)
const useRouterHook = (router?: any) => {
  // In Next.js, use the passed router prop, otherwise use react-router in Vite
  return router || window?.history;
};

interface NavBarProps {
  router?: any; // Optional router prop for Next.js
}

const NavBar: React.FC<NavBarProps> = ({ router }) => {
  const [theme, setTheme] = useState('light');
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // For search input

  // Use custom router hook
  const navigation = useRouterHook(router);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    setIsThemeInitialized(true);
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

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      // If in Next.js, navigate using the router prop passed in
      if (navigation && typeof navigation.push === 'function') {
        navigation.push(`/search/${encodeURIComponent(searchTerm)}`);
      } else {
        // If in React/Vite, use window history (for Vite with react-router)
        window.location.href = `/search/${encodeURIComponent(searchTerm)}`;
      }
    }
  };

  if (!isThemeInitialized) {
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

        <Navbar.Brand className="navbar-brand bold" href="/">
          Abhi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll>
            <Nav.Link className="nav-link bold-links" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/section/tech">
              Tech
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/section/project">
              Project
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/section/life">
              Life
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          
          {/* Search Form */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-border form-control custom-placeholder"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="button-custom-color" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
