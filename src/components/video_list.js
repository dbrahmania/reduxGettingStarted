import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  const videosItems = videos.map((video) => {
    return (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoSelect = {onVideoSelect}
        />
    );
  });
  return (
    <ul className={"col-md-4 list-group"}>
      {
        videosItems
      }  
    </ul>
  )
}

export default VideoList;