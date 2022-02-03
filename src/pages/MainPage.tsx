import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularSection from "../features/movie/popular";
import TopRaterSection from "../features/movie/topRate";
import UpcomingSection from "../features/movie/upComing";
import styled from "@emotion/styled";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0
`;

const MainPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <Main>
                <Container>
                    <LatestMovieSection/>
                    <NowPlayingSection/>
                    <PopularSection/>
                    <TopRaterSection/>
                    <UpcomingSection/>
                </Container>
            </Main>

            <Footer/>
        </div>
    )
};

export default MainPage;
