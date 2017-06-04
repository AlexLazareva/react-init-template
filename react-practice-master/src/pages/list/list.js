import React from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';

export default class ListPage extends React.Component {

    static path = '/list';

    constructor(props) {
        super(props);

        this.state = {
            items: [1, 2]
        };

        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem
                key={ idx }
                id={ item }
            />
        );
    }

    render() {
        return (
            <div className='row'>
                <div className='col-xs-12'>
                    <h3>List</h3>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            { this.state.items.map(this.renderItems) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
