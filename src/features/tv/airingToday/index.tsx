import React from 'react';
import styled from "@emotion/styled";
import Slider from "../../../components/Slider";
import Card from "../../../components/Card";
import useAiringTodayTv from "./useAiringTodayTv";

const Base = styled.div`
  margin-bottom: 42px;
`;
const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;


const AiringTodayTvSection: React.FC = () => {
    const {data, isLoading} = useAiringTodayTv();
    const getYear = (date: string) => date.split('-')[0];


    // @ts-ignore
    return (
        <Base>
            <Title>현재 방영작</Title>
            {
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <Slider>
                        {
                            data?.data?.results.map(tv => {
                                <Card
                                    key={tv.id}
                                    linkUrl={`/tv/${tv.id}`}
                                    title={tv.name}
                                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                                    voteAverage={tv.vote_average}
                                    year={getYear(tv.first_air_date)}
                                />
                            })
                        }
                    </Slider>
                )
            }
        </Base>
    )
}

export default AiringTodayTvSection;
