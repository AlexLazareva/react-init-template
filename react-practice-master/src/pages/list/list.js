import React from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';

export default class ListPage extends React.Component {

    static path = '/list';

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Rihanna - Diamonds',
                    youtube: 'lWA2pjMjpBs'
                },
                {
                    id: 2,
                    name: 'Eminem - Love The Way You Lie ft. Rihanna',
                    youtube: 'uelHwf8o7_U'
                },
                {
                    id: 3,
                    name: 'Eminem - Not Afraid',
                    youtube: 'j5-yKhDd64s'
                },
                {
                    id: 4,
                    name: 'Red Hot Chili Peppers - Californication',
                    youtube: 'YlUKcNNmywk'
                },
                {
                    id: 5,
                    name: 'Metallica - Nothing Else Matters',
                    youtube: 'Tj75Arhq5ho'
                }
            ]
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
