import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://user-images.githubusercontent.com/51382208/96085107-4de61000-0e8e-11eb-9313-07cb298f7011.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p> C# | Java | Python | ASP.NET Core | Flutter | C | AndroidStudio | SQL</p>
          <p>HTML/CSS | Bootstrap | JavaScript | React | Angular | NodeJS  | MongoDB</p>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/elias-tamraz-7928a8172/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/eliastam" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="mailto:eliastamraz97@gmail.com?Subject=Email From My Webiste" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-o" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
