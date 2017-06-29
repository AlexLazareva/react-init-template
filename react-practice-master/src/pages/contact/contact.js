import React from 'react';
import { bindAll } from 'lodash';
import Input from '../../components/ui/input/index';

export default class ContactPage extends React.Component {
    
    static path = '/contact';

    constructor(props) {
        super(props);

        bindAll(this, ['changeName', 'changeEmail', 'submit']);
    }

    changeName(name) {
        this.setState( {name} );
    }

    changeEmail(email) {
        this.setState( {email} );
    }

    submit(event) {
        event.preventDefault();
    }
    
    render() {
        return (
            <form className='b-contact'>
                <h4>Имя: </h4>
                <Input onChange={ this.changeName } value={ this.state.name } />
                <h4>Email: </h4>
                <Input onChange={ this.changeEmail } value={ this.state.email } />
                <button type='submit' onClick={ this.submit }>Сохранить</button>
            </form>
        );
    }
    
}
