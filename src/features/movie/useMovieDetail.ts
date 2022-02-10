import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { detailApi } from '../../apis/movieApi';
import { MovieDetail } from '../../types';

const useMovieDetail = (id: string) => {
    const queryFn = () => detailApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useMovieDetail;


// import {useQuery} from 'react-query';
// import {detailApi} from "../../apis/movieApi";
// import {AxiosError, AxiosResponse} from "axios";
// import {MovieDetail} from "../../types";
//
//
//
// const useMovieDetail = (query: string) => {
//     const queryFn = () => detailApi(query)
//     //enable 을 추가하면 쿼리가 있을 때만 해당 hooks가 작동
//     return useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', query], queryFn)
// }
// export default useMovieDetail;
