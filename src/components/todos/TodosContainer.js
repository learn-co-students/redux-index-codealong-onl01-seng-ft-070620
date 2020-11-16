import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo.js'

class TodosContainer extends Component {

    renderToDos = () => this.props.todos.map( (todo, index) => <Todo key={index} text={todo} />)
    
    render() {
        return (
            <div>
                {this.renderToDos()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        todos: state.todos 
    }
}

export default connect(mapStateToProps)(TodosContainer)
