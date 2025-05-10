import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/AboutPic.css"; // Custom CSS
const AboutPic = ({ image_link }) => {
    return (_jsx(Container, { className: 'text-center', children: _jsxs(Row, { className: "text-center", children: [_jsx(Col, {}), _jsx(Col, { md: 6, children: _jsx("img", { src: image_link, className: "img-fluid mt-3 rounded-circle justify-content", alt: "ProfilePic" }) }), _jsx(Col, {})] }) }));
};
export default AboutPic;
