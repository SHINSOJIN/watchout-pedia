import {useQuery} from 'react-query';
import {detailApi} from "../../apis/movieApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail} from "../../types";




const useTvDetail = (query: string) => {
    const queryFn = () => detailApi(query)
    //enable 을 추가하면 쿼리가 있을 때만 해당 hooks가 작동
    return useQuery<AxiosResponse<TVDetail>, AxiosError>(['tvDetail', query], queryFn)
}
export default useTvDetail;
