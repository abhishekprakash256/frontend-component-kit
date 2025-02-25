import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/style.css'; // the custom import file
import '../styles/More.css'; // the custom import file
const More = ({ more_link }) => {
    // Ensure the link is absolute
    const normalizedLink = more_link.startsWith('http://') || more_link.startsWith('https://')
        ? more_link
        : `https://${more_link}`; // Default to HTTPS if no protocol is provided
    return (_jsx(Container, { children: _jsx(Row, { className: "", children: _jsx(Col, { className: "text-center", children: _jsx("h1", { className: "animate bounce", children: _jsxs("a", { className: "text-decoration-none more-color", href: normalizedLink, 
                        // target="_blank" // Uncomment if you want links to open in a new tab
                        rel: "noopener noreferrer" // Security best practices
                        , children: [_jsx("span", { className: "dot", children: "." }), _jsx("span", { className: "dot", children: "." }), _jsx("span", { className: "dot", children: "." })] }) }) }) }) }));
};
export default More;
