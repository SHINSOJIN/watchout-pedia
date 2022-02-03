import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {upcomingApi} from '../../../apis/movieApi';
import {ListResponse, MovieDetail} from '../../../types';


const useUpcomingMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upComingMovie', upcomingApi);
}
export default useUpcomingMovie;
