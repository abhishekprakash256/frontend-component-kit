import React from 'react';
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
declare const SocialMediaLinks: React.FC<MediaLinksProps>;
export default SocialMediaLinks;
