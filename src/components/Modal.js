import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';


const Modal = () => {

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                        <div className="header">Confirmation</div>
                        <div className="content">Do you want to confirm the subscription ?</div>
                        <div className="actions">
                            <button onClick={ () => history.push('/subscription/confirm') }  className="ui button positive"> Yes </button>
                            <button onClick={ () => history.push('/subscription/cancel') } className="ui button negative"> No </button>
                        </div>
                </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;