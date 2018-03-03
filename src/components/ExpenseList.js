import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container" >

{/* Visibilty (media queries) called for mobile responsivness */}
        <div className="list-header">
            <div className="show-for-mobile">Invoices</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        {/* Prompt displays if list is equal to zero */}
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Expenses to Display</span>
                    </div>
                ) : (                    

        //<h1>Invoices</h1>
        props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
            })
        )
    }
        </div>
    </div>
);

const mapStateToProps = (state) => {
return {
    expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);