import { QueryClient } from '@tanstack/react-query';

// Web-specific QueryClient instance (separate from the mobile one
// to avoid class identity mismatches between the two node_modules)
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
    mutations: {
      retry: 1,
    },
  },
});