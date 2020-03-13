import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import TodoList from './todosCom';


class App extends Component {
      state = {
      items: [],
      input: '',
      isClicked: false
    };

  
  

  inputSub = (event) => {
    event.preventDefault()
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })

  }

  handleDelete = index => { 
    let newItems = [...this.state.items]; 
      newItems.splice(index, 1);
      this.setState({items: newItems});
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={this.formSubmit}>
       <input value={this.state.input} onChange={this.inputSub} />
        <button onClick={this.clicked}>Flip</button>
      </form>
      <TodoList items={this.state.items} handleDelete={this.handleDelete}/>
      </header>
    </div>
  )
  }
}
export default App;
