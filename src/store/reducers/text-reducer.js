import {
    TEXT_CEFR,
    TEXT_DIFFICULTY,
    TEXT_TYPE,
    TEXT_ENES,
    TEXT_ESEN,
    TEXT_TRANSLATION,
} from '../types';

const initialState = {
    token : '',
    user : {}
};

const textReducer = (state = initialState, action) => {
    switch(action.type){
        case TEXT_CEFR:
            return action.payload;

        case TEXT_DIFFICULTY:
            return action.payload;
        
        case TEXT_TYPE:
            return action.payload;

        case TEXT_ENES:
            return action.payload;

        case TEXT_ESEN:
            return action.payload;
        
        case TEXT_TRANSLATION:
            return action.payload;

        default:
            return state
    }
}

export default textReducer;