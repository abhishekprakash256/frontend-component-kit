import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; 
import "../styles/SocialMediaLinks.css"; 

import { FaGithub, FaLinkedin, FaTwitter, FaGitlab, FaKaggle, FaMedium, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

interface MediaLinksProps {
  github_link: string;
  linkedin_link: string;
  twitter_link: string;
  leetcode_link: string;
  gitlab_link: string;
  kaggle_link: string;
  medium_link: string;
}

const SocialMediaLinks: React.FC<MediaLinksProps> = ({
  github_link,
  linkedin_link,
  twitter_link,
  leetcode_link,
  gitlab_link,
  kaggle_link,
  medium_link,
}) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="col-12 d-flex justify-content-center flex-wrap">
          {github_link && (
            <a href={github_link} target="_blank" rel="noopener noreferrer">
              <FaGithub size={36} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
          {linkedin_link && (
            <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={37} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
          {twitter_link && (
            <a href={twitter_link} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={36} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
          {leetcode_link && (
            <a href={leetcode_link} target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={36} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
          {gitlab_link && (
            <a href={gitlab_link} target="_blank" rel="noopener noreferrer">
              <FaGitlab size={36} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
          {kaggle_link && (
            <a href={kaggle_link} target="_blank" rel="noopener noreferrer">
              <FaKaggle size={36} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
          {medium_link && (
            <a href={medium_link} target="_blank" rel="noopener noreferrer">
              <FaMedium size={36} className="rounded mx-2 icon-custom-color" />
            </a>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaLinks;
