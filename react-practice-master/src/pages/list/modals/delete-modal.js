import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';

import { closeModal } from '../../../components/modal/index';

class DeleteModal extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        onSuccess: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['cancel', 'delete']);
    }

    delete() {
        this.props.dispatch( this.props.onSuccess(this.props.id) );
    }

    cancel() {
        this.props.dispatch( closeModal() );
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p>Вы действительно хотите удалить <b>{this.props.id}</b> - {this.props.name}?</p>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-danger' onClick={this.delete}>Удалить</button>
                    <button className='btn btn-default' onClick={this.cancel}>Отмена</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal);
