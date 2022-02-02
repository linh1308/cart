// import * as types from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes';
import * as messages from '../constants/Message';

let initialState = messages.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.msg;
        default: return state;
    }
}

export default message;