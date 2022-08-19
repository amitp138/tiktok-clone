import React from 'react'
import "./Videofooter.css"
import disc from "./videos/disc.png"
import Ticker from 'react-ticker'
import { BsMusicNote} from "react-icons/bs";

const Videofooter = ({channel,description,song}) => {
  return (
    <div className='videofooter'>
       <div className="videofooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videofooter_ticker">
            <BsMusicNote className='videofooter_icon'/>
            <Ticker mode='smooth' className="ticker">
        {({ index }) => (
            <>
                <h1>{song}</h1>
             
            </>
        )}
    </Ticker>
        </div>

        </div>
        <img src={disc} alt="disc" className="videofooter_record" />
        </div>
  )
}

export default Videofooter