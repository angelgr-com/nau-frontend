import {
    SUBMITED,
} from '../types';

const initialState = {
    submited : false,
};

const submitedDataReducer = (state = initialState, action) => {
    switch(action.type){        
        case SUBMITED:
            return action.payload;

        default:
            return state
    }
}

export default submitedDataReducer;