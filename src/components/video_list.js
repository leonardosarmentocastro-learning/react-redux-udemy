/**
 * NPM packages.
 */
import React from 'react';

/**
 * Project packages.
 */
import VideoListItem from './video_list_item';

const VideoList = props => {
  /** Builds a "VideoListItem" for each video retrieved from the search. */
  const onVideoSelect = props.onVideoSelect;
  const videos        = props.videos;
  const listOfVideos  = videos.map(video => {
    const key       = video.etag;
    const template  = (
      <VideoListItem
        key={key}
        video={video}
        onVideoSelect={onVideoSelect} />
    );
    return template;
  });

  /** Render the component template. */
  const template  = (
    <ul className="col-md-4 list-group">
      {listOfVideos}
    </ul>
  );

  return template;
}

export default VideoList;
