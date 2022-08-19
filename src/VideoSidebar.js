import React, { useState } from 'react'
import {BiLike,BiDislike,BiCommentDetail,BiShareAlt} from "react-icons/bi"
import "./VideoSidebar.css"
const VideoSidebar = ({likes,shares,messages}) => {
    const [liked, setLiked] = useState(false);

    return (
      <div className="videoSidebar">
        <div className="videoSidebar__button">
          {liked ? (
            <BiLike fontSize="large" onClick={(e) => setLiked(false)} />
          ) : (
            <BiDislike
              fontSize="large"
              onClick={(e) => setLiked(true)}
            />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="videoSidebar__button">
          <BiCommentDetail fontSize="large" />
          <p>{messages}</p>
        </div>
        <div className="videoSidebar__button">
          <BiShareAlt fontSize="large" />
          <p>{shares}</p>
        </div>
      </div>
    );
  }

export default VideoSidebar