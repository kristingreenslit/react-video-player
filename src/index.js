// import React as a js module into this file (from node)
// ReactDOM library is also now needed to render HTML in the DOM
import React from 'react';
import ReactDOM from 'react-dom';

// function to create a new class component w/jsx that produces some HTML
const App = () => {
	return <div>Hello World!!</div>; 
}

// take component's generated HTML and render it on the page by
// producing an instance of the class component, then specify
// where it should be placed in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));