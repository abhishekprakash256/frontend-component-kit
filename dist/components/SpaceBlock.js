import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/HeadingBar.css"; // Custom CSS
const SpaceBlock = () => {
    return (_jsx(Container, { children: _jsx(Row, { className: "mt-3" }) }));
};
export default SpaceBlock;
