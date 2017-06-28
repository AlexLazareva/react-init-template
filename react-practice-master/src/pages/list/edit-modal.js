import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';

import { closeModal } from '../../components/modal/index';

class EditModal extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['close']);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <h1>Modal works!</h1>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-success'>Сохранить</button>
                    <button className='btn btn-default' onClick={this.close}>Закрыть</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);
