import React from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'redux';
import './styles.css';

class HomePage extends React.Component {
    static path = '/';

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        if (this.state.todoName === '') {
            this.setState({error: 'Поле не должно быть пустым'});
            return;
        }

        const id = this.state.todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;

        const todos = this.state.todos;
        todos.push({id, name});

        this.setState({ todos });
        this.setState({ todoName: '', error: '' });
    }

    renderTodos(item, idx) {
        return (
            <li key={idx}>{item.name}</li>
        );
    }

    render() {
        console.log('Home state: ', this.props)
        const { todoName } = this.state;
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos) }
                    </ul>
                    <div className='col-xs-4'>
                        <Input
                            value={ todoName }
                            onChange={ this.inputOnChange }
                            error = { this.state.error }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
