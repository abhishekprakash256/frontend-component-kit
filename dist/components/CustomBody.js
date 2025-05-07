import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/style.css'; // the custom import file
import '../styles/CustomBody.css'; // the custom import file
const CustomBody = ({ children }) => {
    return (_jsx("div", Object.assign({ className: "custom-body" }, { children: _jsx(Container, { children: _jsx(Row, { children: _jsx(Col, { children: children }) }) }) })));
};
export default CustomBody;
