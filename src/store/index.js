import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import itemsReducer from 'reducers';
import userReducer from 'reducers/reducerUser';

const rootReducer = combineReducers({
  itemsReducer,
  userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */
persistStore(store);

// export default () => ({ store, persistor });
export default store;
