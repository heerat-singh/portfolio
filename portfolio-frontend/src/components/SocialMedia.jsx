import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/heerat-singh"> <BsGithub /> </a>
        </div>
        <div>
            <a href="https://www.facebook.com/heerat.singh.94"> <FaFacebookF /> </a>
        </div>
        <div>
            <a href="https://www.instagram.com/heerat_singh"> <BsInstagram /> </a>
        </div>
    </div>
);

export default SocialMedia;