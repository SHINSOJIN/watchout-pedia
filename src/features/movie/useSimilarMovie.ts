import {useQuery} from 'react-query';
import {similarApi} from "../../apis/movieApi";
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse,MovieDetail} from "../../types";



const useSimilarMovie = (id : string) => {
    //enable 을 추가하면 쿼리가 있을 때만 해당 hooks가 작동
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['similarMovie', id], () => similarApi(id))
}
export default useSimilarMovie;
