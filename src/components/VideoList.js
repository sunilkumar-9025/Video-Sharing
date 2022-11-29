import { Grid } from "@material-ui/core";
import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }) {
  const listofVideos = videos.map((video) => (
    <VideoItem
      onSelectVideo={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <Grid container spacing={10}>
      {listofVideos}
    </Grid>
  );
}

export default VideoList;
