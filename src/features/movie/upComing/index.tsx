import React from 'react';
import styled from "@emotion/styled";
import Slider from "../../../components/Slider";
import Card from "../../../components/Card";
import useUpcomingMovie from "./useUpComingMovie";

const Base = styled.div``;
const Title = styled.h4``;


const UpcomingSection : React.FC = () => {
    const {data, isLoading} = useUpcomingMovie();
    const getYear = (date: string) => date.split('-')[0];



    // @ts-ignore
    return(
        <Base>
            <Title>개봉 예정작</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            data.data.results.map(movie => {
                                <Card
                                    key={movie.id}
                                    linkUrl={`/movie/${movie.id}`}
                                    title={movie.title}
                                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                                    voteAverage={movie.vote_average}
                                    year={getYear(movie.release_date)}
                                />
                            })
                        }
                    </Slider>


                )
            }
        </Base>
    )
}

export default UpcomingSection;
