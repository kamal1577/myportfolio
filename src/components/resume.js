import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="assets/person-3.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Kamal Azizi </h2>

            <h5>Address</h5>
            <p>Brooklyn, NY, 11214</p>
            <h5>Phone</h5>
            <p>(347) 260-5332</p>
            <h5>Email</h5>
            <p>kamalazizialaoui@gmail.com</p>
            <h5>LinkedIN</h5>
            <p>https://www.linkedin.com/in/kamal-el-azizi-alaoui</p>
            <h5>Github</h5>
            <p>https://github.com/kamal1577</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2018}
              schoolName="New York Code + Design Academy"
              schoolDescription=" Certified, Web developer and design"
               />

               <Education
                 startYear={1996}
                 endYear={2001}
                 schoolName="University Hassan II, FST Mohamedia , Morocco"
                 schoolDescription=" Graduted, Master's degree in Chemical Engineering"/>
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2004}
              endYear={2006}
              jobName="Production Manager at OCP GROUP, MOROCCO "
              jobDescription=" Assisted for the first startup and testing for new lines of production.
                               Supervised employees safety and equipment safety in production workshop." />
              <Experience
                startYear={2006}
                endYear={2007}
                jobName="Portabella, NYC/NY"
                jobDescription="Sales Associte"
                />
                <Experience
                startYear={2007}
                endYear={2011}
                jobName="Shoe Mania, NYC/NY"
                jobDescription="Sales Associte"
                />
              <Experience
                startYear={2011}
                endYear={2017}
                jobName="Brooks Brothers, NYC/NY"
                jobDescription="Sales Associte"
                />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Mephisto, NYC/NY"
                jobDescription="Sales Associte"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
