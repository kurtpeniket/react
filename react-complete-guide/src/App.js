import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Kurt', age: 30},
      {name: 'Danusia', age: 30},
      {name: 'Helena', age: 1.5},
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Danusia', age: 30},
        {name: 'Ada', age: 1.5},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Kurt', age: 30},
        {name: event.target.value, age: 30},
        {name: 'Ada', age: 1.5},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px'
    };

    return (
      <div className="App">
          <h1>Hi I'm a react app</h1>
          <button 
            style={style}
            onClick={() => this.switchNameHandler()}>Switch name</button>
          <Person
             name={this.state.persons[0].name} 
             age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Another new name')}
            changed={this.nameChangedHandler} />
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
