import React from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
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

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);
    }

    inputOnChange(value) {
        this.setState ({ todoName: value });
    }

    addTodo() {
        if (this.state.todoName === '') return;

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
                        { todos.map(this.renderTodos) }
                    </ul>
                    <div className='col-xs-4'>
                        <Input
                            value={ '' }
                            onChange={ this.inputOnChange }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}