import { useQuery } from 'react-query';
import { searchApi } from '../../apis/movieApi';
import { Movie, ListResponse } from '../../types';
import { AxiosError, AxiosResponse } from "axios";

const useMovieSearch = (query: string) => {
    const queryFn = () => searchApi(query);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searchMovie', query], queryFn, { enabled: Boolean(query) })

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useMovieSearch;


// import {useQuery} from 'react-query';
// import {searchApi} from "../../apis/movieApi";
// import {AxiosError, AxiosResponse} from "axios";
// import {ListResponse, Movie} from "../../types";
//
//
// const useMovieSearch = (query : string) => {
//     //enable 을 추가하면 쿼리가 있을 때만 해당 hooks가 작동
//     return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searchMovie', query], () => searchApi(query), {enabled: Boolean(query)})
// }
// export default useMovieSearch;
