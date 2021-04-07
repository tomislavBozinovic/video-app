import axios from "axios";

const KEY = "AIzaSyA4UxfBbS-hpshHNApEpzaGGdA5BdmZqtE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
