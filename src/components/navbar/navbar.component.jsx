import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer} from 'react-mdl';

import logo from '../../assets/images/logo.jpg';

import './navbar.styles.scss'



const Navbar = () => {
  
  return (

<div> 
    <div className="header-wrapper">
        <Layout className="header">
            <Header transparent linkTo="../../pages/home-page/home-page.component.jsx" 
            title={<Link to="/"><img className="nav-logo" src={logo}  /></Link>} >
                <Navigation>
                    <Link to="projects">Projects</Link>
                    {/*<Link to="resume">Resume</Link>*/}
                    <Link to="about">About</Link>
                    <Link to="contact">Contact Me</Link>
                </Navigation>
            </Header>
            <h1>Alan Bischoff</h1>
        </Layout>
        <div className="drawer-nav">
        <Layout>
            <Drawer >
                <Navigation>
                    <Link to="projects">Projects</Link>
                     {/*<Link to="resume">Resume</Link>*/}
                    <Link to="about">About</Link>
                    <Link to="contact">Contact Me</Link>
                </Navigation>
            </Drawer>
           
           
        </Layout>
        </div>
    </div>
</div>
  )
}
export default Navbar;