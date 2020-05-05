import React from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import './contact.styles.scss'
import ProfilePic from '../../assets/images/profile-pic.jpg';



function Contact() {
    return(
        <div className="contact-wrapper">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Alan Bischoff</h2>
                    <img src={ProfilePic} alt="profile-pic" />
                    <p>this is a Bio about me</p>
                </Cell>
                <Cell col={6}>
                    <h2 className="contact-me">Contact Me</h2>
                    <hr />
                <div className="contact-list">
                    <List>
                      <ListItem>
                            <ListItemContent >
                            <i className="fa fa-phone-square"> (801) 802-2696</i>
                            </ListItemContent>
                        </ListItem>
                    </List>
                </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;