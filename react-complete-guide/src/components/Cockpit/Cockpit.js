import React from 'react';

const cockpit = (props) => {
  const classes = [];
  if (this.state.persons.length <= 2) {
    classes.push('red');
  }
  if (this.state.persons.length <= 1) {
    classes.push('bold')
  }
  return (
    <div>
      <h1>Hi I'm a react app</h1>
      <p className={classes.join(' ')}>This is a paragraph</p>
      <StyledButton
        alt={this.state.showPersons}
        onClick={this.togglePersonsHandler}> Toggle
      </StyledButton>
      {persons}
    </div>
  )  
}

export default cockpit;
