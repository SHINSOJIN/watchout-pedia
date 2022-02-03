import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import {onTheAirApi} from '../../../apis/tvApi';
import { TVDetail } from '../../../types';

const useOnTheAirTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('onTheAirApi', onTheAirApi);
}
export default useOnTheAirTv;
