import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill} </div>
         
        </Cell>
       
        <Cell col={12}>
        <ProgressBar style={{width: '75%'}} progress={this.props.progress} /> 
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
