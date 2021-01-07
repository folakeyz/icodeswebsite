import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import slide from '../../assets/c1.jpg';
// import slide2 from '../../assets/C4.jpg';
// import slide3 from '../../assets/C5.jpg';
import slide4 from '../../assets/biz.mp4';
import './style.css'

const Slider = () => {
    return(
<>
<div className="containers">
    <div className="overlay"></div>
        <video autoPlay loop muted controlsList="nodownload">
        <source type="video/mp4" src={slide4}/>
    </video>
    </div>
    </>

    )
}
export default Slider;