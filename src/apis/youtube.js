// import React from "react";
import axios from "axios";

const KEY = "AIzaSyD9zHG0nWhqtK2F8OEV6wiZdU-AT7YaMs0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
