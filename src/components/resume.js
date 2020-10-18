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
                src="https://user-images.githubusercontent.com/51382208/96085107-4de61000-0e8e-11eb-9313-07cb298f7011.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Elias Tamraz</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Software Engineering Student at McGill University (3rd Year)</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3285 boulevard du souvenir Laval, Qc</p>
            <h5>Phone</h5>
            <p>(438) 988-3384</p>
            <h5>Email</h5>
            <p>eliastamraz97@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2022}
              schoolName="McLGill University"
              schoolDescription="Bachelor of
              Software
              Engineering
              . Current GPA 3.6/4.0"
               />

             
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"03/ 2020"}
              endYear={"Ongoing"}
              jobName="Web Master at McGill University"
              jobDescription="Hired by Engineering Undergraduate Society (EUS) in McGill University. I build and maintain all websites related to the
              engineering faculty in
              McGill university. "
           

        
              />

              <Experience
                startYear={"04/ 2020"}
                endYear={"09- 2020"}
                jobName="Software Developer internship at IEG America"
                jobDescription="I built APIs using ASP .NET Core and EF and I devloped some webpages using Razor pages and angular"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="C#"
                progress={100}
                />
                
                <Skills
                skill="ASP .NET/ ASP .NET Core"
                progress={100}
                />

                <Skills
                skill="Java"
                progress={100}
                />
                <Skills
                skill="Spring"
                progress={70}
                />
                            <Skills
                skill="Python"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                skill="JavaScript"
                progress={80}
                />
                <Skills
                skill="C"
                progress={60}
                />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />
                      <Skills
                skill="Angular"
                progress={100}
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
