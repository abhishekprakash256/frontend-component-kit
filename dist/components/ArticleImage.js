import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/ArticleImage.css"; // Custom CSS
const ArticleImage = ({ image_link }) => {
    return (_jsx(Container, { children: _jsx(Row, Object.assign({ className: "rounded background-color-body mt-3 p-2" }, { children: _jsx(Col, Object.assign({ className: "text-center" }, { children: _jsx("img", { src: `/images/${image_link}`, className: "img-fluid rounded mt-2 mb-2", alt: "Article" }) })) })) }));
};
export default ArticleImage;
