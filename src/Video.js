import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import "./Video.css"
import Videofooter from './Videofooter';
import video from './videos/vid1.mp4';
import VideoSidebar from './VideoSidebar';
const Video = ({ channel, description, song, likes, messages, shares }) => {
    const videoref=useRef(null);
    const [playing,setPlaying]=useState(false);
    const screenClick=() => {
       if (playing) {
        videoref.current.play();
        setPlaying(!playing)
       }else {
        videoref.current.pause();
        setPlaying(!playing)
       }
    }

  return (
    <div className="video">
        <video
        ref={videoref}
        onClick={screenClick}
        className='videoplayer' 
        loop
        
        src={video}></video>
        <Videofooter
        channel={channel}
        decription={description}
        song={song}/>
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  )
}

export default Video