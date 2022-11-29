import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import Searchbar from "./components/Searchbar";
import { useState } from "react";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
  console.log(videos);
  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Searchbar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyAlQg7NeWOj9OKWDXrFdC2Fg_w4L7RQ0Jg",
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
