import {useQuery} from 'react-query';
import {similarApi} from "../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse,TVDetail} from "../../types";



const useSimilarTv = (id : string) => {
    //enable 을 추가하면 쿼리가 있을 때만 해당 hooks가 작동
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['similarTv', id], () => similarApi(id))
}
export default useSimilarTv;
