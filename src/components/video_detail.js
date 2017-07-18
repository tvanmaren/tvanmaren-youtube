import React from 'react';

const VideoDetail = ({video}) =>{
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
<<<<<<< HEAD
          <iframe className="embed-responsive-item" src={url} title="current"></iframe>
=======
          <iframe className="embed-responsive-item" src={url}></iframe>
>>>>>>> 153413ab01683bc9619efa7328216762ba7896a8
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
};

export default VideoDetail;
