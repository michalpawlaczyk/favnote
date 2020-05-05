import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from 'reducers';
import userReducer from 'reducers/reducerUser';

const rootReducer = combineReducers({
  itemsReducer,
  userReducer,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

export default store;
