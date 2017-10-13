/**
 * NPM packages.
 */
import React from 'react';

const VideoListItem = (props) => {
  const video         = props.video;
  const onVideoSelect = props.onVideoSelect;

  const snippet   = video.snippet;
  const imageUrl  = snippet.thumbnails.default.url;
  const title     = snippet.title;

  const template = (
    <li
      className="list-group-item"
      onClick={ () => onVideoSelect(video) }>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
  return template;
};

export default VideoListItem;
