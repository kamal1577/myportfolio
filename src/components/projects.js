import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
         activeTab: false
        };
   }

    toggleCategories() {
      if(this.state.activeTab === 0){
        return(
          <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}> Project: Blood-Donation</CardTitle>
            <CardText>
              Blood donations are often done by individuals because often hospitals don't have enough blood to give to those in need.
            </CardText>
            <CardActions border>

              <Button center colored>Github</Button>

            </CardActions>
            <CardMenu style={{ color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}>Project: Instagram App</CardTitle>
            <CardText>
              This is a group project duplicating the instagram application, built by using NodeJS and Express.
            </CardText>
            <CardActions border>
              <Button  centred colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover'}}> Project: RottenTomatoes</CardTitle>
            <CardText>
              This is a Group project duplicating RottenTomatoes by using ReactJS and Redux and OMDB'S API.
            </CardText>
            <CardActions border>
              <Button center colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color:'#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
        )
      }else if(this.state.activeTab === 1){
        return(
          <div><h1>This is Instagram-clone</h1></div>
        )
      }else if(this.state.activeTab === 2){
        return(
          <div><h1>This is RottenTomates-clone</h1></div>
        )
      }
    }


  render() {
    return(
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Blood-Donation</Tab>
            <Tab>Instagram-clone</Tab>
            <Tab>RottenTomates-clone</Tab>
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
