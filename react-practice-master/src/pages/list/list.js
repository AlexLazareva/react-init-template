import React from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';

export default class ListPage extends React.Component {

    static path = '/list';

    constructor(props) {
        super(props);

        this.state = {
           // items:
        };

        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem
                key={ idx }
                id={ item.id }
                name={ item.name }
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
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
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
