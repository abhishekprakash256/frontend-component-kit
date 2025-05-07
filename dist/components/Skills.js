import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/Skills.css"; // Custom CSS
import ReactMarkdown from 'react-markdown';
const Skills = ({ mark_down_data }) => {
    return (_jsx(Container, { children: _jsx(Row, Object.assign({ className: "rounded background-color-body mt-3 p-2" }, { children: _jsx(Col, { children: _jsx("div", Object.assign({ className: "mb-0 font-color-class bio-desc markdown-body" }, { children: _jsx(ReactMarkdown, { children: mark_down_data }) })) }) })) }));
};
export default Skills;
