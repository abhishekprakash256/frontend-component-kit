import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/ArticleImage.css"; // Custom CSS
const ArticleImage = ({ image_link }) => {
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-2", children: _jsx(Col, { className: "text-center", children: _jsx("img", { src: image_link, className: "img-fluid rounded mt-2 mb-2 article-image-container p-3", alt: "Article" }) }) }) }));
};
export default ArticleImage;
