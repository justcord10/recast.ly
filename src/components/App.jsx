import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

//import exampleVideoData
import exampleVideoData from '../data/exampleVideoData.js';
const testVideoData = exampleVideoData.slice();
console.log(testVideoData);

const {useState, useEffect} = React;

var App = () => {

  //States go here
  //changing the video player video to a new video(from list or from search)
  const [currentVideo, setCurrentVideo] = useState(testVideoData[0]);
  //state to track videos in the video list
  const [videoList, setVideoList] = useState(testVideoData);

  //create a function to handle video entry title

  const getVideoList = (videos) => {
    setVideoList(videos);
    //addVideoToList([...videos, newVideo]) //videoList is the search results list not a playlist
  };

  const getCurrentVideo = (video) => {
    setCurrentVideo(video);
  };


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search videos={testVideoData} getVideoList={getVideoList}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={testVideoData} getCurrentVideo={getCurrentVideo}/>
        </div>
      </div>
    </div>
  );
};

// Import exampleVideoData.js into your App component so it can be used by your React components

//const [videos, setVideos] = useState({exampleVideoData});
//Pass exampleVideoData into the VideoList components




// const root = ReactDOM.createRoot(document.querySelector('#app'));
// root.render(<App/>);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
