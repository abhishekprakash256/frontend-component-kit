"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css");
var Button_1 = require("react-bootstrap/Button");
var Container_1 = require("react-bootstrap/Container");
var Form_1 = require("react-bootstrap/Form");
var Nav_1 = require("react-bootstrap/Nav");
var Navbar_1 = require("react-bootstrap/Navbar");
require("../styles/style.css"); // the custom import file
require("../styles/NavBar.css"); // the custom import file
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var NavBar = function () {
    var _a = (0, react_1.useState)('light'), theme = _a[0], setTheme = _a[1]; // Default theme
    var _b = (0, react_1.useState)(false), isThemeInitialized = _b[0], setIsThemeInitialized = _b[1]; // Track if the theme is ready
    (0, react_1.useEffect)(function () {
        var savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        setIsThemeInitialized(true); // Mark theme as initialized
    }, []);
    (0, react_1.useEffect)(function () {
        if (isThemeInitialized) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme, isThemeInitialized]);
    var toggleTheme = function () {
        setTheme(function (prevTheme) { return (prevTheme === 'light' ? 'dark' : 'light'); });
    };
    if (!isThemeInitialized) {
        // Avoid rendering the component until the theme is initialized
        return null;
    }
    return (<Navbar_1.default expand="lg" className="footer-header-color">
      <Container_1.default fluid>
        <div className="dark-switch">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} checked={theme === 'dark'}/>
          <label htmlFor="checkbox" className="checkbox-label">
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faMoon} style={{ marginRight: '10px' }}/>
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faSun}/>
            <span className="ball"></span>
          </label>
        </div>

        <Navbar_1.default.Brand className="navbar-brand bold" href="#">
          Abhi
        </Navbar_1.default.Brand>
        <Navbar_1.default.Toggle aria-controls="navbarScroll"/>
        <Navbar_1.default.Collapse id="navbarScroll">
          <Nav_1.default className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll>
            <Nav_1.default.Link className="nav-link bold-links" href="/about">
              About
            </Nav_1.default.Link>
            <Nav_1.default.Link className="nav-link bold-links" href="/tech">
              Tech
            </Nav_1.default.Link>
            <Nav_1.default.Link className="nav-link bold-links" href="/project">
              Project
            </Nav_1.default.Link>
            <Nav_1.default.Link className="nav-link bold-links" href="/life">
              Life
            </Nav_1.default.Link>
            <Nav_1.default.Link className="nav-link bold-links" href="/contact">
              Contact
            </Nav_1.default.Link>
          </Nav_1.default>
          <Form_1.default className="d-flex">
            <Form_1.default.Control type="search" placeholder="Search" className="me-2 custom-border form-control custom-placeholder" aria-label="Search"/>
            <Button_1.default className="button-custom-color">Search</Button_1.default>
          </Form_1.default>
        </Navbar_1.default.Collapse>
      </Container_1.default>
    </Navbar_1.default>);
};
exports.default = NavBar;
