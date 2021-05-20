import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2">
                    +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2">
                    -
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br></br>
            </React.Fragment>
        );
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

}
 
export default Counter;



//notes

//Conditional Rendering 

// renderTags() {
//         if (this.state.tags.length === 0) {
//             return <p>There are no tags!</p>;
//         }
//         return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
//     }

// { this.renderTags() }

//Binding Event Handlers (alternate approach)

// constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }