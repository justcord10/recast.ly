import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'kind, etag, id, snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true',
    },
    success: function(data) {
      //data
      var firstFive = data.slice(0, 5);
      //console.log(callback);
      callback(firstFive);
      //console.log(firstFive);

      console.log('Request Succeeded');


    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;
