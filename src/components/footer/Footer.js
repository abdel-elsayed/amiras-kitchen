import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='social-media-wrap'> 
      <a href="mailto:abdel.elsayed18@gmail.com"
          rel="noopener noreferrer"
          class='social-icon-link'
          target='_blank'
          aria-label='mail'
        >
          <i class="far fa-envelope"></i>
        </a>
        <a
          rel="noreferrer"
          class='social-icon-link'
          href='https://www.youtube.com/channel/UCch1FgoG7eS1NeVbgVWTfyQ/videos'
          target='_blank'
          aria-label='Youtube'
        >
          <i class='fab fa-youtube' />
        </a>
        <a
          rel="noreferrer"
          class='social-icon-link'
          href='https://www.instagram.com/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <i class="fab fa-instagram"></i>
        </a>
        
        
      </div> 
      <div style={{paddingTop:"2rem"}}>
      <small class='website-rights'>Amira's Kitchen © 2021</small>
      </div>
    </div>
  );
}

export default Footer;