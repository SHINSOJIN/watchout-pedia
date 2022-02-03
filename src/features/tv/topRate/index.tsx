import React from 'react';
import styled from "@emotion/styled";
import Slider from "../../../components/Slider";
import Card from "../../../components/Card";
import useTopRateTv from "./useTopRateTv";


const Base = styled.div`
  margin-bottom: 42px;
`;
const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding:12px 0 14px;
`;

const TopRaterTvSection : React.FC = () => {
    const {data, isLoading} = useTopRateTv();
    const getYear = (release_date: string) => release_date.split('-')[0];
    return(
        <Base>
            <Title>인기 상영작</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            data.data.results.map(tv => {
                                <Card
                                    key={tv.id}
                                    linkUrl={`/tv/${tv.id}`}
                                    title={tv.name}
                                    posterPath={`http://image.tmdb.org/t/p${tv.poster_path}`}
                                    voteAverage={tv.vote_average}
                                    year={getYear(tv.first_air_dat)}
                                />
                            })
                        }
                    </Slider>


                )
            }
        </Base>
    )
}

export default TopRaterTvSection;
