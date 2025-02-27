import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/SocialMediaLinks.css"; // Custom CSS
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin-color.svg";
import gitlab from "../assets/icons/gitlab-color.svg";
//import twitter from "../assets/icons/twitter.svg"; 
import kaggle from "../assets/icons/kaggle-color.svg";
import leetcode from "../assets/icons/leetcode-color.svg";
const SocialMediaLinks = ({ github_link, linkedin_link, twitter_link, leetcode_link, gitlab_link, kaggle_link, medium_link, }) => {
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: _jsxs(Col, { className: "col-12 d-flex justify-content-center flex-wrap", children: [github_link && (_jsx("a", { href: github_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: github, className: "leetcode-icon hover-effect-github mx-2", width: "33", height: "33", alt: "GitHub" }) })), linkedin_link && (_jsx("a", { href: linkedin_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: linkedin, className: "leetcode-icon hover-effect-linkedin mx-2", width: "33", height: "33", alt: "LinkedIn" }) })), twitter_link && (_jsx("a", { href: twitter_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: "#", className: "leetcode-icon hover-effect-twitter mx-2", width: "33", height: "33", alt: "Twitter" }) })), leetcode_link && (_jsx("a", { href: leetcode_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: leetcode, className: "leetcode-icon hover-effect-leetcode mx-2", width: "33", height: "33", alt: "LeetCode" }) })), gitlab_link && (_jsx("a", { href: gitlab_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: gitlab, className: "leetcode-icon hover-effect-gitlab mx-2", width: "33", height: "33", alt: "GitLab" }) })), kaggle_link && (_jsx("a", { href: kaggle_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: kaggle, className: "leetcode-icon hover-effect-kaggle mx-2", width: "33", height: "33", alt: "Kaggle" }) })), medium_link && (_jsx("a", { href: medium_link, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: "#", className: "leetcode-icon hover-effect-medium mx-2", width: "33", height: "33", alt: "Medium" }) }))] }) }) }));
};
export default SocialMediaLinks;
