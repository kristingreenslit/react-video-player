// import React and pull off 'Component' as a variable called 'Component'
import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />
// };

// upgraded 'functional' component to 'class' component for added functionality
class SearchBar extends Component {
	// function to initialize state for class component and its children
	constructor(props) {
		// super - method on the parent class 'Component'
		super(props);
		// new js object assigned to this.state (empty search term)
		this.state = { term: '' };
	}
	// updated render to ES6 syntax below
	// render() {
	// 	return <input onChange={this.handleInputChange} />;
	// }
	// handleInputChange(event) {
	// 	console.log(event.target.value);
	// }
	render() {
		// changed to controlled field - value in input reflects state change 
		// when event occurs (event = user enters text)
		return (
			<div>
				<input 
				value = {this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
			</div>
		)
	}
}

// only code exported out of this file is the SearchBar component
export default SearchBar;