import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomePageCaursole = (props) => {
    return (
        <Carousel className="imagehomepageCaursole">
            <Carousel.Item>
                <img alt="900x500" src={props.imag1} />

            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={props.image2} />

            </Carousel.Item>

        </Carousel>
    )
}
export default HomePageCaursole