import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducers'
import { reducer } from './reducers'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;