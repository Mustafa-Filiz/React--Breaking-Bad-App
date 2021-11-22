import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Quotes from '../pages/Quotes';

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/char/:char_id" component={Detail} />
                <Route exact path="/quotes" component={Quotes} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
