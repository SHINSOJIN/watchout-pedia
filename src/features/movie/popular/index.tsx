import React from 'react';
import styled from "@emotion/styled";
import Card from '../../../components/Card'
import usePopularMovie from "./usePopularMovie";
import Slider from "../../../components/Slider";

const Base = styled.div`
  margin-bottom: 42px;
`;
const Title = styled.h4`
font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding:12px 0 14px;
`;
const PopularSection: React.FC = () => {
    const {data, isLoading} = usePopularMovie();
    const getYear = (date: string) => date.split('-')[0];
    // @ts-ignore
    return (
        <Base>
            <Title>인기 상영작</Title>
            {
                isLoading? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            data?.data?.results.map(movie => (
                                <Card
                                    key={movie.id}
                                    linkUrl={`/movie/${movie.id}`}
                                    title={movie.title}
                                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                                    voteAverage={movie.vote_average}
                                    year={getYear(movie.release_date)}
                                />
                                )
                            )
                        }
                    </Slider>
                )
            }
        </Base>
    )
}

export default PopularSection;
