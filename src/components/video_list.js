import React from 'react';

// functional component that is a container for video list items
const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group">
		{props.videos.length}
		</ul>
	);
};

export default VideoList;