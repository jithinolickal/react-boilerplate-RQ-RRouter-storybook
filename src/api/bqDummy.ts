// @ts-nocheck
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxiosGet, useAxiosPost } from "src/hooks/useApi";

const fetchBqDummy = async (params) => {
  const { data } = await useAxiosGet(
    `http://localhost:8000/api/charge/v2`
  );
  const dataWithKeys = data.map((doc) => ({ ...doc, key: doc.subscription_id }))
  return dataWithKeys;
};

const createBqDummy = async (body) => {
  const { data } = await useAxiosPost(
    `https://jsonplaceholder.typicode.com/posts`,
    body
  );
  console.log("Post Created -------", data);

  return data;
};

export const useGetBqDummy = (params = null) => {
  return useQuery<User, Error>({
    queryKey: ["bqDummyGET"],
    queryFn: () => fetchBqDummy(params),
  });
};

export const usePostBqDummy = (data) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createBqDummy(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["bqDummyGET"], { exact: true });
      console.log("Data returned--", data);
    },
  });
};

// export const useGetPost=(postId) => {}
// export const usePutPost=() => {}
// export const useDeletePost=() => {}
