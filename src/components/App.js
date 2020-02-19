import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import Modal from './Modal';
import Confirmation from './Confirmation';
import history from '../history';
import CancelSubscription from './CancelSubscription';
import Home from './Home';


class App extends React.Component {

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/form" exact component={Form}></Route>
                        <Route path="/subscription" exact component={Modal}></Route>
                        <Route path="/subscription/confirm" exact component={Confirmation}></Route>
                        <Route path="/subscription/cancel" exact component={CancelSubscription}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;