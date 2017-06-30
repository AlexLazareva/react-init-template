import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import is from 'is_js';

import { submitForm } from './actions';
import Input from '../../components/ui/input/index';
import './styles.less';

class ContactPage extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }
    
    static path = '/contact';

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            errorName: '',
            errorEmail: ''
        };

        bindAll(this, ['changeName', 'changeEmail', 'submit', '_isFormValid', '_isNameValid', '_isEmailValid']);
    }

    changeName(name) {
        this.setState( {name} );
    }

    changeEmail(email) {
        this.setState( {email} );
    }

    submit(event) {
        event.preventDefault();

        if (!this._isFormValid()) return;

        this.props.dispatch( submitForm(this.state.name, this.state.email) );
        this.setState({
            name: '',
            email: ''
        });
    }

    _isFormValid() {
        return this._isNameValid(this.state.name) && this._isEmailValid(this.state.email);
    }

    _isNameValid(name) {
        let errorName = '';

        if (name === '') {
            errorName = 'Поле не может быть пустым';
            this.setState({ errorName });
            return false;
        }

        if (name.length < 3) {
            errorName = 'Длина не может быть меньше 3-х символов';
            this.setState({ errorName });
            return false;
        }

        this.setState({ errorName });
        return true;
    }

    _isEmailValid(email) {
        let errorEmail = '';

        if (email === '') {
            errorEmail = 'Поле не может быть пустым';
            this.setState({ errorEmail });
            return false;
        }

        if (!is.email(email)) {
            errorEmail = 'Поле должно быть email';
            this.setState({ errorEmail });
            return false;
        }

        this.setState({ errorEmail });
        return true;
    }
    
    render() {
        return (
            <div className='row'>
                <div className='col-xs-6'>
                    <form className='b-contact'>
                        <h4>Имя: </h4>
                        <Input
                            onChange={ this.changeName }
                            value={ this.state.name }
                            error={ this.state.errorName }
                        />

                        <h4>Email: </h4>
                        <Input
                            onChange={ this.changeEmail }
                            value={ this.state.email }
                            error={ this.state.errorEmail }
                        />

                        <button type='submit' className='btn btn-primary' onClick={ this.submit }>Сохранить</button>
                    </form>
                </div>
            </div>
        );
    }
    
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactPage);
