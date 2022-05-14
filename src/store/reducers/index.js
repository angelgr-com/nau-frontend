import {combineReducers} from 'redux';

import credentials from './loginData-reducer';
import text from './text-reducer';

const rootReducer = combineReducers({
    credentials,
    text
});

export default rootReducer;