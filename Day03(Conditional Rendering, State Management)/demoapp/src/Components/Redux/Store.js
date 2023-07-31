import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import nameReducer from './nameReducer';
import logger from 'redux-logger';
import productsReducer from '../Products/Redux_Pipeline/productsReducer';
import dummyReducer from './dummyReducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    name: nameReducer,
    products: productsReducer,
    dummy: dummyReducer,
});


const reduxStore = legacy_createStore(combinedReducer, applyMiddleware(logger, thunk));

reduxStore.subscribe(()=>{
    console.log("Store Updated");
});

export default reduxStore;