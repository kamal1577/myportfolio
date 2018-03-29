import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
         activeTab: 0
        };
   }

    toggleCategories() {
      if(this.state.activeTab === 0){
        return(
          <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}> React Project #1</CardTitle>
            <CardText>
              ghhgjlhghhhhhhhhhhbhbbnmbjkkjjkjljlm,.m,,mnjhjbnmnmbnbnvbnvbfdfddfs
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}> React Project #2</CardTitle>
            <CardText>
              ghhgjlhghhhhhhhhhhbhbbnmbjkkjjkjljlm,.m,,mnjhjbnmnmbnbnvbnvbfdfddfs
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
        )
      }else if(this.state.activeTab === 1){
        return(
          <div><h1>This is NodeJS</h1></div>
        )
      }else if(this.state.activeTab === 2){
        return(
          <div><h1>This is PostgreSQL</h1></div>
        )
      }
    }


  render() {
    return(
        <div calssName="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>NodeJS</Tab>
            <Tab>PostgreSQL</Tab>
          </Tabs>

          
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>



        </div>
    )
  }
}
export default Projects;
