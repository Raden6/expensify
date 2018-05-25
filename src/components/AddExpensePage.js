import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'; 


// we switched to a class based component because we didnt want to have inline event handlers https://www.quora.com/What-is-event-handler-in-JavaScript
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={this.onSubmit} 
            />
        </div>
        );
    }

}

const mapDispatchToProps = (props) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); 