import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/tv" element={<TvPage />}/>
                    <Route path="/tv/:id" element={<TvDetail />}/>
                    <Route path="/movie/:id" element={<MovieDetail />}/>
                </Routes>
            </BrowserRouter>
            <LoginModal/>
            <SignupModal/>
        </Base>

    );
}

export default App;
