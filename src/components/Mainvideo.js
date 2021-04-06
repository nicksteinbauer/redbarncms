import React, { useState, useEffect } from "react";

import CellTower from "../img/cell-tower-2.mp4"


function Mainvideo() {

    const [offsetY, setOffsetY] = useState(0);
    const handleSroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleSroll);

        return () => window.removeEventListener("scroll", handleSroll);
    }, []);

    return (

        <div className="video-contain"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
            
            <video autoPlay="autoplay" muted loop="loop" id="bgvid">
            <source src={CellTower} type="video/mp4" />
            </video>
            <div className="video-contain__gradient"></div>
              
        </div>

);
}
export default Mainvideo;

