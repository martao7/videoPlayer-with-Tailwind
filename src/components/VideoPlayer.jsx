import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  return (
    <video className="h-full w-full rounded-lg" controls>
      <source
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
