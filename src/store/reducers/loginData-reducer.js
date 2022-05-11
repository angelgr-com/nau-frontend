import {LOGIN, LOGOUT, MODIFY_CREDENTIALS} from '../types';

const initialState = {
    token : '',
    user : {}
};

const loginDataReducer = (state = initialState, action) => {
    switch(action.type){
        // Saves in login state the user's logged in data
        case LOGIN :
            return action.payload;

        // Deletes saved user's data
        case LOGOUT : 
            return initialState;
        
        case MODIFY_CREDENTIALS :
            return {...state, usuario: action.payload};

        default :
            return state
    }
}

export default loginDataReducer;