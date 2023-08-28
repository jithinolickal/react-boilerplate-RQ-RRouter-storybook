import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import client from "src/utils/rqclient.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AppWrapper />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
