import {
    TEXTID,
} from '../types';

const initialState = {
    textid : '',
};

const textReducer = (state = initialState, action) => {
    switch(action.type){        
        case TEXTID:
            return action.payload;

        default:
            return state
    }
}

export default textReducer;