'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/style.css'; // Custom styles
import '../styles/MarkDown.css'; // Custom styles
const MarkDown = ({ mark_down_data }) => {
    return (_jsx(Container, { children: _jsx(Row, Object.assign({ className: "rounded background-color-body mt-3 p-2" }, { children: _jsx(Col, { children: _jsx("div", Object.assign({ className: "mb-0 mt-1 font-color-class bio-desc markdown-body" }, { children: _jsx(ReactMarkdown, Object.assign({ remarkPlugins: [remarkGfm] }, { children: mark_down_data })) })) }) })) }));
};
export default MarkDown;
