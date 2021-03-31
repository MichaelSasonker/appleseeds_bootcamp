import React from 'react';
import Img1 from './moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg';
import Img1Black from  './img1.png';
import Img2 from './space-shuttle-atlantis-liftoff-mission-rocket-39698.webp';
import Img2Black from  './img2.png';

const ToggleImg  = () => {

    const imgRef1 = React.useRef();
    const imgRef2 = React.useRef();

    const handleEnter = (e) => {
        if (e.target.name === 'img1') {
            imgRef1.current.src = Img1Black;
        }
        else {
            imgRef2.current.src = Img2Black;
        }
    }

    const handleLeave = (e) => {
        if (e.target.name === 'img1') {
            imgRef1.current.src = Img1;
        }
        else {
            imgRef2.current.src = Img2;
        }
    }

    return (
        <div>
            <img 
                ref={imgRef1} 
                src={Img1} 
                alt={Img1}
                name='img1' 
                height='400px' 
                width='400px' 
                style={{margin: '50px'}} 
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
            />
            <img 
                ref={imgRef2} 
                src={Img2} 
                alt={Img2}
                name='img2' 
                height='400px' 
                width='400px' 
                style={{margin: '50px'}} 
                onMouseEnter={(e) => handleEnter(e)}
                onMouseLeave={(e) => handleLeave(e)}
            />
        </div>
    );

}

export default ToggleImg;

/* App.js
import React from 'react';
import ToggleImg from './components/img_toggle_21.3/img_toggle_21.3';

    const imgRef = React.useRef();


    return (
        <React.Fragment>
            <ToggleImg />
        </React.Fragment>
    );
}

export default App;
*/