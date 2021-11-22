import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/char/:char_id" component={Detail} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
