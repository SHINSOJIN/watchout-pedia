import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import {popularApi} from '../../../apis/tvApi';
import { TVDetail } from '../../../types';

const usePopularTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('popularTv', popularApi);
}
export default usePopularTv;
