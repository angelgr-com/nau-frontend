import {combineReducers} from 'redux';

import credentials from './loginData-reducer';
import textid from './textidData-reducer';
import hitrate from './hitrateData-reducer';
import submited from './submitedData-reducer';

const rootReducer = combineReducers({
    credentials,
    textid,
    hitrate,
    submited
});

export default rootReducer;