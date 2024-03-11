import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import customFetch from "../utils";
import { toast } from "react-toastify";

export const useCustomFetch = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch("/");
      return data.taskList;
    },
  });

  return { isPending, data, isError };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKeys: ["tasks"] });
      toast.success("Task created successfully");
    },
    onError: () => {
      toast.error("Please provide a task title");
    },
  });

  return { createTask, isPending };
};
export const useUpdateTask = () => {
  const clientQuery = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, isDone }) =>
      customFetch.patch(`/${id}`, { isDone: !isDone }),
    onSuccess: () => {
      clientQuery.invalidateQueries({ clientQuery: ["tasks"] });
    },
  });

  return { updateTask };
};
export const useDeleteTask = () => {
  const clientQuery = useQueryClient();

  const { mutate: deleteTask, isPending: deleteTaskLoading } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onSuccess: () => {
      clientQuery.invalidateQueries({ clientQuery: ["tasks"] });
    },
  });

  return { deleteTask, deleteTaskLoading };
};
