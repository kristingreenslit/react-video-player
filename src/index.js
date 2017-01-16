// import React as a js module into this file (from node)
// ReactDOM library is also now needed to render HTML in the DOM
import React from 'react';
import ReactDOM from 'react-dom';

// import component with path to search_bar file so that babel is not confused,
// not needed for library imports above b/c they're namespaced
import SearchBar from './components/search_bar';

const apiKey = config.API_KEY;

// function to create a new class component w/jsx that produces some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// take component's generated HTML and render it on the page by
// producing an instance of the class component, then specify
// where it should be placed in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));