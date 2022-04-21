import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token
  
      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
        headers.set("Content-Type", "application/json");
        const token = localStorage.getItem("token");
        if(token) {
          headers.set("x-auth-token", token);
        }
      // }
  
      return headers;
    },
  }),
  tagTypes: ["Student"],
  endpoints: (builder) => ({

    getTasks: builder.query({
      query: () => "/todo/get",
      // transformResponse: (res) => res.reverse(),
      providesTags: ["Student"],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "todo/add",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Student"],
    }),
    
    // updateTask: builder.mutation({
    //   query: ({ id, ...student }) => ({
    //     url: `students/${id}`,
    //     method: "PUT",
    //     body: student,
    //   }),
    //   invalidatesTags: ["Student"],
    // }),

    deleteTask: builder.mutation({ 
      query: (id) => ({
        url: `todo/delete/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Student"],
    }),

    login: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload
      })
    })
    

  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  // useUpdateTaskMutation,
  useDeleteTaskMutation,
  useLoginMutation
} = taskApi;
