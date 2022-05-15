import {
    HITRATE,
} from '../types';

const initialState = {
    hitrate : '',
};

const hitrateDataReducer = (state = initialState, action) => {
    switch(action.type){        
        case HITRATE:
            return action.payload;

        default:
            return state
    }
}

export default hitrateDataReducer;