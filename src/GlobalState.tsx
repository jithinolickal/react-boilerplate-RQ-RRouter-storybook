import { QueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import client from "src/utils/rqclient.ts";

const useRQSGlobalState = (key, initialData) => [
  useQuery(
    { queryKey: [key], queryFn: () => initialData },
    {
      enabled: false, // Important - To prevent from clearing cache/data
      initialData,
    }
  ).data,
  (value) => client.setQueryData([key], value),
];

const StateEditor = () => {
  const [value, setValue] = useRQSGlobalState("globalState", "111");
  return (
    <input value={value || ""} onChange={(evt) => setValue(evt.target.value)} />
  );
};

const StateViewer = () => {
  const [value] = useRQSGlobalState("globalState", "");
  return <div>{value}</div>;
};

const GlobalState = () => {
  return (
    <div>
      <StateEditor />
      <StateViewer />
    </div>
  );
};

export default GlobalState;
