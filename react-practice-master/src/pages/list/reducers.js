import { GET_ITEMS } from './actions';

const initialState = {
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

function listReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return Object.assign({}, state);
        default: state;
    }
}

const ListReducer = {
    list: ListReducer
};

export default ListReducer;
