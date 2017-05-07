import React from 'react';
import './styles.css';

export default class HomePage extends React.Component {
    static path = '/';

    constructor(props) {
        super(props);

        this.state = {
            todoName: '',
            todos: [
                {
                    id: 1,
                    name: 'Item 1'
                }
            ]
        };
    }

    inputOnChange(event) {
        const todoName = event.target.value;
        this.setState ({ todoName });
    }

    addTodo() {
        const id = this.state.todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;

        const todos = this.state.todos;
        todos.push({id, name});

        this.setState({ todos });
        this.setState({ todoName: '' });
    }

    renderTodos(item, idx) {
        return (
            <li key={idx}>{item.name}</li>
        );
    }

    render() {
        const { todoName, todos } = this.state;
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos.bind(this)) }
                    </ul>
                    <div className='col-xs-4'>
                        <input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this) }/>
                        <button className='btn btn-primary' onClick={ this.addTodo.bind(this) }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}
