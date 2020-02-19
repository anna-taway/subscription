import React from 'react';

class Confirmation extends React.Component {

    render() {
        return (
            <div style={{marginTop: '50px'}}>
                <div className="ui success message">
                    <i className="close icon"></i>
                    <div className="header">
                        Your user registration was successful.
                    </div>
                    <p>You may now log-in with the username you have chosen</p>
                </div>
            </div>
            
        );
    }
};

export default Confirmation;
