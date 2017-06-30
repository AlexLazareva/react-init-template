import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

class TopAlert extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    render() {
        const { name, email } = this.props.user;

        if ( isEmpty(name) || isEmpty(email) ) return null;

        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(TopAlert);

