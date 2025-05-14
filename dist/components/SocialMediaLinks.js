import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaGitlab, FaKaggle, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/style.css';
import '../styles/SocialMediaLinks.css';
const SocialMediaLinks = (props) => {
    const socialLinks = [
        { link: props.github_link, icon: _jsx(FaGithub, { className: "social-icon icon-custom-color" }) },
        { link: props.linkedin_link, icon: _jsx(FaLinkedin, { className: "social-icon icon-custom-color" }) },
        { link: props.twitter_link, icon: _jsx(FaTwitter, { className: "social-icon icon-custom-color" }) },
        { link: props.leetcode_link, icon: _jsx(SiLeetcode, { className: "social-icon icon-custom-color" }) },
        { link: props.gitlab_link, icon: _jsx(FaGitlab, { className: "social-icon icon-custom-color" }) },
        { link: props.kaggle_link, icon: _jsx(FaKaggle, { className: "social-icon icon-custom-color" }) },
        { link: props.medium_link, icon: _jsx(FaMedium, { className: "social-icon icon-custom-color" }) }
    ];
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: _jsx(Col, { className: "col-12 d-flex justify-content-center flex-wrap", children: socialLinks.map(({ link, icon }, idx) => link && (_jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "mx-2", children: icon }, idx))) }) }) }));
};
export default SocialMediaLinks;
