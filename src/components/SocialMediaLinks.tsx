import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGitlab,
  FaKaggle,
  FaMedium
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import '../styles/style.css';
import '../styles/SocialMediaLinks.css';

interface MediaLinksProps {
  github_link: string;
  linkedin_link: string;
  twitter_link: string;
  leetcode_link: string;
  gitlab_link: string;
  kaggle_link: string;
  medium_link: string;
}

const SocialMediaLinks: React.FC<MediaLinksProps> = (props) => {
  const socialLinks = [
    { link: props.github_link, icon: <FaGithub className="social-icon icon-custom-color" /> },
    { link: props.linkedin_link, icon: <FaLinkedin className="social-icon icon-custom-color" /> },
    { link: props.twitter_link, icon: <FaTwitter className="social-icon icon-custom-color" /> },
    { link: props.leetcode_link, icon: <SiLeetcode className="social-icon icon-custom-color" /> },
    { link: props.gitlab_link, icon: <FaGitlab className="social-icon icon-custom-color" /> },
    { link: props.kaggle_link, icon: <FaKaggle className="social-icon icon-custom-color" /> },
    { link: props.medium_link, icon: <FaMedium className="social-icon icon-custom-color" /> }
  ];

  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="col-12 d-flex justify-content-center flex-wrap">
          {socialLinks.map(
            ({ link, icon }, idx) =>
              link && (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  {icon}
                </a>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaLinks;
