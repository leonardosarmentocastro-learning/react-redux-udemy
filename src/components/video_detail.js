import React from 'react';

const VideoDetail = ({video}) => {
  const isFatherComponentLoadingVideoInformation = !Boolean(video);
  if (isFatherComponentLoadingVideoInformation) {
    const template = <div>Loading</div>;
    return template;
  }

  const videoId = video.id.videoId;
  const url     = `https://www.youtube.com/embed/${videoId}`;

  const snippet     = video.snippet;
  const title       = snippet.title;
  const description = snippet.description;

  const template = (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );

  return template;
};

export default VideoDetail;
