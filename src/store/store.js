import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import thunk from 'redux-thunk';

import UserReducers from './User/UserReducers';
import ProjectReducers from './Project/ProjectReducers';
import ArticleReducers from './Article/ArticleReducers';
import MessageReducers from './Message/MessageReducers';
import AlertReducer from "./Alert/AlertReduces";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    User : UserReducers,
    Project : ProjectReducers,
    Article : ArticleReducers,
    Message : MessageReducers,
    Alert : AlertReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
