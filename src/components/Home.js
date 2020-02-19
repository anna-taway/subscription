import React from 'react';
import GoogleAuth from './GoogleAuth';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="ui attached message">
                    <div className="header">
                        Welcome to our website!
                    </div>
                    <div className="content">
                        <p>Find out your events, share with your friends, 
                        travel for free and meet new friends !!! A thousand million of people
                        have tried this adventure all over the world !!  </p>
                        <p>So now it's your turn to discover new culture, 
                        taste new horizons and enjoy your tour !!</p>
                        <p>Please sign in with Google, fill the form and subscribe to our newsletter and 
                        receive three promotional code to begin your marvellours adeventure :)</p>
                    </div>
                </div>
                <div className="ui bottom attached message">
                    <GoogleAuth />
                </div>
            </div>
        );
    }
};

export default Home;