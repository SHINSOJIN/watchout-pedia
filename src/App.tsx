import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import TvDetail from './pages/TvDetail';
import MovieDetail from './pages/MovieDetail';
import LoginModal from "./features/app/LoginModal";
import SignupModal from "./features/app/SignupModal";
import styled from "@emotion/styled";

const Base = styled.div``;

function App() {
    return (
        <Base>
            <Router>
                <Switch>
                    <Route path="/" component={MainPage}/>
                    <Route path="/tv" component={TvPage}/>
                    <Route path="/tv/:id" component={TvDetail}/>
                    <Route path="/movie/:id" component={MovieDetail}/>
                </Switch>
            </Router>
            <LoginModal/>
            <SignupModal/>

        </Base>

    );
}

export default App;
