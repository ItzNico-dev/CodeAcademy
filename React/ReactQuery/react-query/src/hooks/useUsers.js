import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const USER_ENDPOINT = 'https://randomuser.me/api/?results=15';

const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return axios.get(USER_ENDPOINT).then((results) => results.data.results);
    },
    staleTime: 2000,
    // refetchInterval: 2000,
  });

export default useUsers;
