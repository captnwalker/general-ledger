import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


// Building our store with redux and redux-thunk middleware
// Redux is a predictable state container for JavaScript apps. Esentially, Flux for React
// Redux-Thunk is a function that wraps an expression to delay its evaluation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),

        composeEnhancers(applyMiddleware(thunk))       
    );

        return store;
};
