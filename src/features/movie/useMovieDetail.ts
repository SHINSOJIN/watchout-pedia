import {useQuery} from 'react-query';
import {detailApi} from "../../apis/movieApi";
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail} from "../../types";



const useMovieDetail = (query: string) => {
    const queryFn = () => detailApi(query)
    //enable 을 추가하면 쿼리가 있을 때만 해당 hooks가 작동
    return useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', query], queryFn)
}
export default useMovieDetail;
