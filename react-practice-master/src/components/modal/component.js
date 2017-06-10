import React from 'react';
import { connect } from 'react-redux';

class Modal extends React.Component {

    render() {
        return (
            <div className='modal fade'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Modal title</h5>
                            <button type='button' className='close'>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary'>Save changes</button>
                            <button type='button' className='btn btn-secondary'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps())(Modal);

