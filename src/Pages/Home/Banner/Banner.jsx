import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from '../../../assets/Home/Banner/Banner1.jpg'
import img4 from '../../../assets/Home/Banner/Banner4.jpg'
import img3 from '../../../assets/Home/Banner/Banner3.jpg'
import img2 from '../../../assets/Home/Banner/Banner2.jpg'

const Banner = () => {
    // "Summer Weight Loss Bonanza - Shed Pounds, Save More!"
    // "Slim Down for Summer - Unbeatable Deals on Weight Loss!"
    return (
        <Carousel autoPlay infiniteLoop>
            {/* <div>
                <img src={img1} />
            </div> */}
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img2} />
            </div>
        </Carousel>

    );
};

export default Banner;