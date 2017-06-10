import React from 'react';
import { connect } from 'react-redux';

export default class Modal extends React.Component {

    render() {
        return (
            <div>

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
