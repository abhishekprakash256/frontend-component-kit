"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // Custom CSS
require("../styles/SocialMediaLinks.css"); // Custom CSS
var SocialMediaLinks = function (_a) {
    var github_link = _a.github_link, linkedin_link = _a.linkedin_link, twitter_link = _a.twitter_link, leetcode_link = _a.leetcode_link, gitlab_link = _a.gitlab_link, kaggle_link = _a.kaggle_link, medium_link = _a.medium_link;
    return (<react_bootstrap_1.Container>
      <react_bootstrap_1.Row className="rounded background-color-body mt-3 p-3 text-center">
        <react_bootstrap_1.Col>
          {github_link && (<a href={github_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="github.svg" className="leetcode-icon hover-effect-github" width="33" height="33" alt="GitHub"/>
              </i>
            </a>)}

          {linkedin_link && (<a href={linkedin_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="linkedin-color.svg" className="leetcode-icon hover-effect-linkedin" width="33" height="33" alt="LinkedIn"/>
              </i>
            </a>)}

          {twitter_link && (<a href={twitter_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="twitter.svg" className="leetcode-icon hover-effect-twitter" width="33" height="33" alt="Twitter"/>
              </i>
            </a>)}

          {leetcode_link && (<a href={leetcode_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="leetcode-color.svg" className="leetcode-icon hover-effect-leetcode" width="33" height="33" alt="LeetCode"/>
              </i>
            </a>)}

          {gitlab_link && (<a href={gitlab_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="gitlab-color.svg" className="leetcode-icon hover-effect-gitlab" width="33" height="33" alt="GitLab"/>
              </i>
            </a>)}

          {kaggle_link && (<a href={kaggle_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="kaggle-color.svg" className="leetcode-icon hover-effect-kaggle" width="33" height="33" alt="Kaggle"/>
              </i>
            </a>)}

          {medium_link && (<a href={medium_link} target="_blank" rel="noopener noreferrer">
              <i className="m-3">
                <img src="medium.svg" className="leetcode-icon hover-effect-medium" width="33" height="33" alt="Medium"/>
              </i>
            </a>)}
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </react_bootstrap_1.Container>);
};
exports.default = SocialMediaLinks;
