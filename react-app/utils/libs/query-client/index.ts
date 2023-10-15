import { QueryCache, QueryClient } from '@tanstack/react-query';

export { QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query';

// TODO: DODAC TOASTIFY
export default new QueryClient({
  queryCache: new QueryCache({}),
});
