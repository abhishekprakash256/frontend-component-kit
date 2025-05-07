import React from 'react';
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
declare const SocialMediaLinks: React.FC<MediaLinksProps>;
export default SocialMediaLinks;
