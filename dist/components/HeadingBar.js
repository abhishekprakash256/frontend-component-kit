import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/HeadingBar.css"; // Custom CSS
const HeadingBar = ({ title }) => {
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-2", children: _jsx(Col, { className: "text-center", children: _jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: title }) }) }) }));
};
export default HeadingBar;
