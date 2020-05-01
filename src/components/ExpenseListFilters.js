import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {sortByDate} from '../actions/filters';
import {sortByAmount} from '../actions/filters';
import {setStartDate} from '../actions/filters';
import {setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component{
    state ={
        calenderFocused: null
    };
    onDatesChange = ({startDate,endDate}) =>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);

    }
    onFocusChange = (calenderFocused) => {
    this.setState(()=> ({calenderFocused}));
    }

    onTextChange = (e) =>{
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e)=>{
        if(e.target.value === 'date'){
            this.props.sortByDate();
        }else{
            this.props.sortByAmount();
        }
        
    }
    render(){
        return(
            <div>
            <input type= "text" value= {this.props.filters.text} onChange = {this.onTextChange} />
            <select value= {this.props.filters.sortBy} onChange = {this.onSortChange} >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            endDateId = "end" //just add this for test purpose
            startDateId = "start" //just add this for test purpose
            startDate = {this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange = {this.onDatesChange}
            focusedInput = {this.state.calenderFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = {() => false}
            showClearDates= {true}
            />
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) =>({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

const mapStateToProps = (state)=>{
    return{
    filters: state.filters
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);