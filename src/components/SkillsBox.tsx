import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/SkillsBox.css"; // Custom CSS
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGitlab,
  FaKaggle,
  FaMedium
} from 'react-icons/fa';

import {
SiPython, SiJavascript, SiTypescript, SiGnubash,
SiReact, SiNextdotjs, SiNodedotjs, SiFlask, SiBootstrap, SiNginx, 
SiDocker, SiGithubactions,  SiAnsible,
SiPostgresql, SiMongodb, SiRedis, SiSqlite, SiMysql, SiDuckdb,
SiPytorch, SiTensorflow, SiPandas, SiScikitlearn, 
} from 'react-icons/si';

import { FaBrain , FaAws , FaRobot } from 'react-icons/fa';
import { GiArtificialIntelligence , GiCircuitry } from 'react-icons/gi';
import { MdApi } from 'react-icons/md'; 




const SkillsBox: React.FC = () => {
return (
    <Container>
        
    <Row className="rounded background-color-body mt-3 p-2">
    <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font m-0">
            Programming Language
            </h1>
        </Col>
    </Row>


     {/* Programming Language */}
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="text-center">
          <div className="skills-icons">
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <SiPython className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <SiJavascript className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              <SiTypescript className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
              <SiGnubash className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
          </div>
        </Col>
      </Row>

        <Row className="rounded background-color-body mt-3 p-2">
        <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font m-0">
            Web Development
            </h1>
        </Col>
    </Row>


      {/* Web development */}
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="text-center">
          <div className="skills-icons">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <SiReact className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">
              <MdApi className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>

            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              <SiNextdotjs className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              <SiNodedotjs className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
              <SiFlask className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
              <SiBootstrap className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://nginx.org/" target="_blank" rel="noopener noreferrer">
              <SiNginx className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
          </div>
        </Col>
      </Row>

        <Row className="rounded background-color-body mt-3 p-2">
        <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font m-0">
            Cloud & DevOps
            </h1>
        </Col>
    </Row>


   {/* Cloud & DevOps */}

   
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="text-center">
          <div className="skills-icons">
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <FaAws className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              <SiDocker className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">
              <FaGitlab className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">
              <SiGithubactions className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">
              <SiAnsible className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
          </div>
        </Col>
      </Row>

      {/* Databases */}

    <Row className="rounded background-color-body mt-3 p-2">
    <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font m-0">
            Databases
            </h1>
        </Col>
    </Row>
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="text-center">
          <div className="skills-icons">
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
              <SiPostgresql className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              <SiMongodb className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer">
              <SiSqlite className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://redis.io/" target="_blank" rel="noopener noreferrer">
              <SiRedis className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              <SiMysql className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://duckdb.org/" target="_blank" rel="noopener noreferrer">
              <SiDuckdb className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
          </div>
        </Col>
      </Row>

      {/* ML & AI */}

     <Row className="rounded background-color-body mt-3 p-2">
    <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font m-0">
            Machine Learning & AI
            </h1>
        </Col>
    </Row>
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="text-center">
          <div className="skills-icons">
            <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
              <SiPytorch className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
              <SiTensorflow className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
              <SiPandas className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
              <SiScikitlearn className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Neural_network" target="_blank" rel="noopener noreferrer">
              <FaBrain className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">
              <GiArtificialIntelligence className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>

            <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer">
              <FaRobot className="social-icon icon-custom-color mx-2 no-hover-icons" />
            </a>
          </div>
        </Col>

        </Row>




    </Container>
  );
};

export default SkillsBox;
