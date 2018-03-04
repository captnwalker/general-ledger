import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import DropdownList from 'react-widgets/lib/DropdownList'
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'
import 'react-dates/lib/css/_datepicker.css';
//import { Field, reduxForm } from 'redux-form';
// import DropdownList from 'react-widgets/lib/DropdownList';
// import SelectList from 'react-widgets/lib/SelectList';
// import Multiselect from 'react-widgets/lib/Multiselect';
// import 'react-widgets/dist/css/react-widgets.css';

//const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY' ));

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
    
    this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        // categories: props.categories ? props.categories.value : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
            this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
            this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (               
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

    {/* ///////////////// DROP DOWN - CATEGORIES //////////////////////////////////// */}

    {/* const options = ['payroll', 'meat', 'poultry', 'produce', 'seafood', 'rent', 'utilities', 'linens', 'paper_supplies', 'serviceware'];

                <div>
                    <label>Categories</label>
                    <div>
                        <Field name="categories" component="select">
                            <option></option>
                            <option value="payroll">payroll</option>
                            <option value="meat">meat</option>
                            <option value="poultry">poultry</option>
                            <option value="produce">produce</option>
                            <option value="0000ff">Blue</option>
                            <option value="0000ff">Blue</option>
                            <option value="0000ff">Blue</option>
                            <option value="0000ff">Blue</option>
                            <option value="0000ff">Blue</option>
                            <option value="0000ff">Blue</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                </div> */}


{/*            
            let ReactWidgetsForm = props => {

                const options = ['payroll', 'meat', 'poultry', 'seafood', 'rent', 'utilities', 'linens', 'paper_supplies', 'serviceware'];

                const { handleSubmit, pristine, reset, submitting } = props
                
                    <form onSubmit={handleSubmit}>
                                    
                                        <label>Categories</label>
                                        <Field
                                            name="categories"
                                            component={DropdownList}
                                            data={options}
                                            />
                                     */}
              
    {/* /////////////////////////////////////////////////////////////// */}

                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />


                    {/* Params for Calendar */}
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                    <textarea 
                    placeholder="Add a note for your invoice? (optional)"
                    className="text-area"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button" >Save Invoice Changes</button>
                    </div>                    
                </form>
            )
        }
    }