import {combineReducers} from 'redux';

import credentials from './loginData-reducer';
import textid from './textidData-reducer';
import hitrate from './hitrateData-reducer';

const rootReducer = combineReducers({
    credentials,
    textid,
    hitrate
});

export default rootReducer;