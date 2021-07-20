import {combineReducers, createStore} from 'redux'
import oanTuTiReducer from './reducer/oanTuTiReducer'

const rootReducer = combineReducers({
    //Liệt kê các state của ứng dụng 
    stateOanTuTi: oanTuTiReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
