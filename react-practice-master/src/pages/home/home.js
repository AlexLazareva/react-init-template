import React from 'react';
import './styles.css';

export default class HomePage extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='row b-home'>
                <div className='col-xs-12'>
                    <ul>
                        <li>Item 1</li>
                    </ul>
                    <div className='col-xs-4'>
                        <input type='text' className='form-control'/>
                        <button className='btn btn-primary'>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}
