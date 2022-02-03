import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {ListResponse, MovieDetail} from '../../../types';
import {topRatedApi} from "../../../apis/movieApi";


const useTopRateMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRateMovie', topRatedApi);
}
export default useTopRateMovie;
