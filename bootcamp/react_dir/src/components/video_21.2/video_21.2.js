import React from 'react';
import Video from './taltal.mp4'

const VideoRef = () => {

    const videoRef = React.useRef();

    const handleClick = (e) => {
        if (e.target.value === 'Play') {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    }

    return (
        <div>
            <video ref={videoRef} width="600" height="500" controls>
                <source src={Video} type="video/mp4"/>
            </video> 
            <div>
                <input type='button' value='Play' onClick={(e) => handleClick(e)}  />
                <input type='button' value='Pause' onClick={(e) => handleClick(e)}  />

            </div>
        </div>
    );
}

export default VideoRef;

/* App.js
import React from 'react';
import VideoRef from './components/video_21.2/video_21.2'

const App = () => {

    return (
        <React.Fragment>
            <VideoRef />
        </React.Fragment>
    );
}

export default App;
*/