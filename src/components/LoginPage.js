import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (

    <div className="login-layout">
        <div className="login-layout__login">
            <h1 className="logo">Restaurant Expense Manager</h1>
            <p>Authorized Users Only</p>
            <p>Please Log In</p>

        <button className="button" onClick={ startLogin }>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);