import React from 'react';

import './home-page.styles.scss';

import Memoji from '../../components/memoji/memoji.component';
import CustomButton from '../../components/custom-button/custom-button.componet';


function HomePage() {
  
  return (

    <div className="content-wrapper">   
        <Memoji />
        <div className="homepage-bio">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>HTML/CSS | JavaScript | React | Ruby on Rails | Node.js | Express | MongoDB</p>
            <div className="social-links">

                <a href="https://www.linkedin.com/in/alanlbischoff/" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                <a href="https://github.com/Alanleeb" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                <a href="https://www.instagram.com/alanleeb/" target="_blank" rel="noopener noreferrer" >
                    <i class="fa fa-instagram"></i>
                </a>
            

            </div>
        </div>
    </div>
 

  );
}

export default HomePage;