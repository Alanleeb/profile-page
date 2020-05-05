import React, { Component } from 'react';

import { Tabs, Tab, Grid, Cell, } from 'react-mdl'

import ReactPage from './projects-react.component';
import JavaScriptPage from './projects-javascript.compnent';
import CssPage from './projects-css.component';
import NonCodePage from './projects-non-code.component';

import './projects-main.styles.scss';

class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = { activeTab: 0}
    }

    toggleCategories = () => {
       if(this.state.activeTab === 0) {
          return( <ReactPage /> )
       } else if (this.state.activeTab === 1){
           return ( <JavaScriptPage />)
       } else if (this.state.activeTab === 2){
        return ( <CssPage />)
       } else {
           return ( <NonCodePage />)
       } 
    }

    render() {
    return(
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => {
                this.setState({ activeTab: tabId} )}} ripple>
                <Tab style={{color: '#bfbdc1'}}>React</Tab>
                <Tab style={{color: '#bfbdc1'}}>JavaScript</Tab>
                <Tab style={{color: '#bfbdc1'}}>CSS</Tab>
                <Tab style={{color: '#bfbdc1'}}>Other</Tab>
            </Tabs>

        
            <Grid className="projects-grid">
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
                
    
        </div>
    )
}}

export default Projects;