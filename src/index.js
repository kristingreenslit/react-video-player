import _ from 'lodash';
// import React as a js module into this file (from node)
// ReactDOM library is also now needed to render HTML in the DOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import component with path to search_bar file so that babel is not confused, not needed for library imports above b/c they're namespaced
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const apiKey = config.API_KEY;

// moved to constructor function below so that it kicks off immediately
// YTSearch({key: apiKey, term: 'surfboards'}, function(data) {
// 	console.log(data);
// });

// function to create a new class component w/jsx that produces some HTML
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

// changed to class component so that results of new user search (list of video objects in an array) can be updated with state
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
		// initial video search
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: apiKey, term: term}, (videos) => {
			// this.setState({ videos: videos});
			// using ES6 instead to set state to object with new key-value pair, only works when key and variable are the same name
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {
		// reduces screen flickering/new search on every letter typed in input field
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		// data passed from parent component, App, to child component below:
		// VideoList so that videos can be accessed by VideoList
		// SearchBar so that function can be passed that updates results based on new search term
		return (
			<div>
				{/* Search Bar updated to throttle search term results:
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}

// take component's generated HTML and render it on the page by
// producing an instance of the class component, then specify
// where it should be placed in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));