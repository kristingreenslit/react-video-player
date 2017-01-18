import React from 'react';
import VideoListItem from './video_list_item';

// functional component that is a container for video list items
// pass VideoListItem a video as a property named 'video' w/a unique key
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
		{videoItems}
		</ul>
	);
};

export default VideoList;