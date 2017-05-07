import React from 'react';
import './styles.css';

export default class HomePage extends React.Component {
    static path = '/';

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };
    }

    inputOnChange(event) {
        const todoName = event.target.value;
        this.setState ({ todoName });
    }

    render() {
        const { todoName } = this.state;
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        <li>Item 1</li>
                    </ul>
                    <div className='col-xs-4'>
                        <input type='text' className='form-control' value={ todoName } onChange={ this.inputOnChange.bind(this) }/>
                        <button className='btn btn-primary'>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}
