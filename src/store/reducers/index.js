import {combineReducers} from 'redux';

import credentials from './loginData-reducer';

const rootReducer = combineReducers({
    credentials,
});

export default rootReducer;