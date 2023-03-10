import React, { Component } from 'react';

import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

export default class App extends Component {
  render() {
    const shareUrl = 'https://www.facebook.com';
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          margin:0
        }}
      >
        <div className='d-flex gap-10'>
        <FacebookShareButton
          url={shareUrl}
          round={true}
        >
          <FacebookIcon size={35} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url="https://twitter.com/"
        >
          <TwitterIcon size={35} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton    
        url="https://www.linkedin.com/"
        >
            <LinkedinIcon round={true} size={35}></LinkedinIcon>
        </LinkedinShareButton>
        </div>
      </div>
    );
  }
}