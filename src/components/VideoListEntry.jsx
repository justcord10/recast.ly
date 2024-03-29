var VideoListEntry = ({video, getCurrentVideo}) => {
  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img
          className="media-object"
          src={video.snippet.thumbnails.default.url}
          alt=""
          onError={(e) => {
            e.target.src = 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/4/original/logo-graybg-02.png'; // Set the URL of a fallback image
          }}
        />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => getCurrentVideo(video)} >{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div> );
};
/* <img className="media-object" src={video.thumbnails.default.url} alt="" /> */
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


export default VideoListEntry;
