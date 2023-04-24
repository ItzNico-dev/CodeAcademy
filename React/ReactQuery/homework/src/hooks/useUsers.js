import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return axios.get(ENDPOINT).then((response) => response.data);
    },
  });

export default useUsers;
