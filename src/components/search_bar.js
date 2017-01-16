// import React and pull off 'Component' as a variable called 'Component'
import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />
// };

// upgraded 'functional' component to 'class' component for added functionality
class SearchBar extends Component {
	render() {
		return <input onChange={event => console.log(event.target.value)} />;
	}
}

// only code exported out of this file is the SearchBar component
export default SearchBar;