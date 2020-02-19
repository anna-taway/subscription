import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <div className="ui secondary  menu">
                    <Link to="/" className="item">
                        Home
                    </Link>
                    <Link to="/form" className="item">
                        Subscription
                    </Link>
                    <div className="right menu">
                        <div className="ui item">
                            <GoogleAuth />
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
};

export default Header;