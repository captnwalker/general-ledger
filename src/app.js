import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
// import { DropdownList } from 'react-widgets'
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// import 'react-widgets/dist/css/react-widgets.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage'; 

// Define the store
const store = configureStore();

// Set variable
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Insures app only renders once
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

// Firebase authorization scheme
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

