import React, { useEffect, useState } from 'react'
import Video from './Video';
import "./App.css"
import db from "./firebase";
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className='app'>
<h1>this is tiktok</h1>
<div className="app_videos">
{videos.map(
          ({ channel, description, song, likes, messages, shares }) => (
            <Video
              
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
</div>
    </div>
  )
}

export default App;