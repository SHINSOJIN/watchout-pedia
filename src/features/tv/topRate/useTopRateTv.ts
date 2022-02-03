import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {ListResponse } from '../../../types';
import TVDetail from "../../../pages/TvDetail";
import {topRatedApi} from "../../../apis/tvApi";



const useTopRateTv = () => {
    // @ts-ignore
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRateTv', topRatedApi);
}
export default useTopRateTv;
