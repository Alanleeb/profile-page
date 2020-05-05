import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

import './projects-react.styles.scss';

class ReactPage extends Component {
    constructor() {
        super();

        this.state={
            reactProjects: [
                {
                    'title': 'Monsters Rolodex',
                    'text': 'This app holds all of your monster contacts, and you can sort them by name',
                    'imgUrl': 'https://robohash.org/1?set=set2&amp;siz=180x180',
                    'button1': 'Github',
                    'url1': 'https://github.com/Alanleeb/Monsters-rolodex',
                    'button2': 'Live Demo',
                    'url2': 'https://alanleeb.github.io/Monsters-rolodex/', 
                },{
                    'title': 'React Project #2',
                    'text': 'Milk Milk Milk Milk',
                    'imgUrl': 'https://robohash.org/6?set=set2&amp;siz=180x180',
                    'button1': 'Github',
                    'url1': 'https://github.com/Alanleeb/Monsters-rolodex',
                    'button2': 'CodePen',
                    'url2': 'www.facebook.com',
                },
                {
                    'title': 'React Project #3',
                    'text': 'bats bats bats bats',
                    'imgUrl': 'https://robohash.org/6?set=set2&amp;siz=180x180',
                    'button1': 'Github',
                    'url1': 'https://github.com/Alanleeb/Monsters-rolodex',
                    'button2': 'CodePen',
                    'url2': 'www.facebook.com',
                }    
            ]
                }
            
        }
   
    render() {
    return (
    <div className="projects">
    {
    this.state.reactProjects.map(card => (
        <Card shadow={5} className="card-wrapper">
            <CardTitle className="card-title" style={{background: `url(${card.imgUrl}) center / cover`, backgroundColor: '#bfbdc1'}} >
                {card.title}
            </CardTitle>
            <CardText>
                {card.text}
            </CardText>
            <CardActions className="button-wrapper" border> 
                <Button raised ><a  href={card.url1} target="_blank">{card.button1}</a></Button>
                <Button raised ><a href={card.url2} target="_blank">{card.button2}</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    ))
}
    </div>
    ) }
}
export default ReactPage;