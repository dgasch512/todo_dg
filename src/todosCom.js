import React from 'react';

function TodoList(props) {
  return(
  <div>
    <h4>GET THIS SHIZ DONE</h4>
    <ul>
      {props.items.map((item, index) => {
      return (
        <div>
        <li index={index}>{item}   <button onClick={ () => this.handleDelete({ item })} > X </button></li>
        
        </div>)
      })}
    </ul>
  </div>
  )
}

export default TodoList;