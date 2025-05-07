import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/Para.css"; // Custom CSS
const Para = ({ description }) => {
    return (_jsx(Container, { children: _jsx(Row, Object.assign({ className: "rounded background-color-body mt-3 p-2" }, { children: _jsx(Col, { children: _jsx("p", { className: "mb-2 mt-2 font-color-class bio-desc justify-content", dangerouslySetInnerHTML: { __html: description } }) }) })) }));
};
export default Para;
