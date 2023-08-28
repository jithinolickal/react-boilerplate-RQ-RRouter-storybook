import { QueryClient } from "@tanstack/react-query";

export default new QueryClient(
  { defaultOptions: { queries: { staleTime: 1000 * 60 * 0.1 } } } // To cache api calls for 1min(from the time it is re-triggered. even if its invalidated, the stale time restarts from 0)
);
