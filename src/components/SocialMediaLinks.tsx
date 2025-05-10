import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; 
import "../styles/SocialMediaLinks.css"; 


interface MediaLinksProps {
  github_link: string;
  github_icon: string;

  linkedin_link: string;    
  linkedin_icon: string;

  twitter_link: string;
  twitter_icon: string;

  leetcode_link: string;
  leetcode_icon: string;

  gitlab_link: string;
  gitlab_icon: string;

  kaggle_link: string;
  kaggle_icon: string;

  medium_link: string;
  medium_icon: string;
}

const SocialMediaLinks: React.FC<MediaLinksProps> = ({
  github_link, github_icon,
  linkedin_link, linkedin_icon,
  twitter_link, twitter_icon,
  leetcode_link, leetcode_icon,
  gitlab_link, gitlab_icon,
  kaggle_link, kaggle_icon,
  medium_link, medium_icon,

  
}) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="col-12 d-flex justify-content-center flex-wrap">
          {github_link && (
            <a href={github_link} target="_blank" rel="noopener noreferrer">
              <img src={github_icon} className="leetcode-icon hover-effect-github mx-2" width="33" height="33" alt="GitHub" />
            </a>
          )}
          {linkedin_link && (
            <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} className="leetcode-icon hover-effect-linkedin mx-2" width="33" height="33" alt="LinkedIn" />
            </a>
          )}
          {twitter_link && (
            <a href={twitter_link} target="_blank" rel="noopener noreferrer">
              <img src={twitter_icon} className="leetcode-icon hover-effect-twitter mx-2" width="33" height="33" alt="Twitter" />
            </a>
          )}
          {leetcode_link && (
            <a href={leetcode_link} target="_blank" rel="noopener noreferrer">
              <img src={leetcode_icon} className="leetcode-icon hover-effect-leetcode mx-2" width="33" height="33" alt="LeetCode" />
            </a>
          )}
          {gitlab_link && (
            <a href={gitlab_link} target="_blank" rel="noopener noreferrer">
              <img src={gitlab_icon} className="leetcode-icon hover-effect-gitlab mx-2" width="33" height="33" alt="GitLab" />
            </a>
          )}
          {kaggle_link && (
            <a href={kaggle_link} target="_blank" rel="noopener noreferrer">
              <img src={kaggle_icon} className="leetcode-icon hover-effect-kaggle mx-2" width="33" height="33" alt="Kaggle" />
            </a>
          )}
          {medium_link && (
            <a href={medium_link} target="_blank" rel="noopener noreferrer">
              <img src={medium_icon} className="leetcode-icon hover-effect-medium mx-2" width="33" height="33" alt="Medium" />
            </a>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaLinks;
