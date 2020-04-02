import axios from 'axios';

const KEY = 'AIzaSyDGQmW-XeZx_7rR8qyY3ZIGVKlfm1nFCOs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
