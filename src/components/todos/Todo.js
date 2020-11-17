import React from 'react'
// just a regular functional component for rendering ea todo
const Todo = props => {
  return (
    <li key={props.key}>{props.text}</li>
  )
}

export default Todo
