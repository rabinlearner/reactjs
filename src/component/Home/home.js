import React from 'react';
import HomePageCaursole from './homepageCaursole';
import image1 from '../../images/online-shopping-m-1024x683.jpg';
import image2 from '../../images/banner-bg.jpg';

class Home extends React.Component {

    render() {
        console.log(image2);
        return (
            <div>
                <HomePageCaursole imag1={image1} image2={image2} />
            </div>
        )
    }
}
export default Home;