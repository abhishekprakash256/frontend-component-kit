import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css'; // the custom import file
import '../styles/NavBar.css'; // the custom import file
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
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
    return (_jsx(Navbar, { expand: "lg", className: "footer-header-color", children: _jsxs(Container, { fluid: true, children: [_jsxs("div", { className: "dark-switch", children: [_jsx("input", { type: "checkbox", className: "checkbox", id: "checkbox", onChange: toggleTheme, checked: theme === 'dark' }), _jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [_jsx(FontAwesomeIcon, { icon: faMoon, style: { marginRight: '10px' } }), _jsx(FontAwesomeIcon, { icon: faSun }), _jsx("span", { className: "ball" })] })] }), _jsx(Navbar.Brand, { className: "navbar-brand bold", href: "#", children: "Abhi" }), _jsx(Navbar.Toggle, { "aria-controls": "navbarScroll" }), _jsxs(Navbar.Collapse, { id: "navbarScroll", children: [_jsxs(Nav, { className: "me-auto my-2 my-lg-0", style: { maxHeight: '150px' }, navbarScroll: true, children: [_jsx(Nav.Link, { className: "nav-link bold-links", href: "/about", children: "About" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/tech", children: "Tech" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/project", children: "Project" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/life", children: "Life" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/contact", children: "Contact" })] }), _jsxs(Form, { className: "d-flex", children: [_jsx(Form.Control, { type: "search", placeholder: "Search", className: "me-2 custom-border form-control custom-placeholder", "aria-label": "Search" }), _jsx(Button, { className: "button-custom-color", children: "Search" })] })] })] }) }));
};
export default NavBar;
