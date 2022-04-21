import React, { Component, useContext, useEffect, useState } from "react";
import TodoItem from "./todoItem/TodoItem";
import { Col, Card, Typography, message } from "antd";
import { useGetTasksQuery, useDeleteTaskMutation, useRefreshTasksMutation } from "../rtkState/todo";


const TodoList = (props) => {

  const key = "deletable";

  // const [state, setState] = useState({
  //   data: {
  //     items: 0,
  //     todoItems: []
  //   },
  //   isFetching: true
  // });


  const  {refetch, data, isFetching } = useGetTasksQuery();


  // const [refreshTasks, {isFetching, isLoading}] = useRefreshTasksMutation();

  // console.log(isLoading)
  
  // refreshTasks.then(function(res) {
  //   console.log(res)
  // });

  // const res = await refreshTasks();

  // console.log(res);

  

  const [deleteTask, {isLoading, isSuccess}] = useDeleteTaskMutation();

  // const dispatch = useDispatch();

  // const {getAllTasks, deleteTask} = bindActionCreators(actions, dispatch);

  // const state = useSelector(state => state.myTasksList);


  // useEffect( async () => {

  //   getAllTasks();

  // }, []);

  useEffect( async () => {

      // const  {data, isFetching } = useGetTasksQuery();

    // const res = refreshTasks();

    if(isFetching) {
      // console.log(res);
    }

    // console.log("isFetching: "  + isFetching);

    // if (isLoading) {
      // message.loading({ content: "deleting...", key });
    // }
    if (isFetching) {
      // message.loading({ content: "loading...", key });
    }
    // if (isSuccess) {
    //   message.success({ content: "deleted successfully", key, duration: 2 });
    // }
  }, [isFetching]);

  const deleteItem = async(id) => {

    await deleteTask(id); 
    console.log("delete " + id)
    // refetch();

  };


  return (
    <div
      className="card"
      style={{ width: "30rem", margin: "0 auto", marginTop: "5rem" }}
    >
      <ul className="list-group list-group-flush">

      {isFetching? "Loading": 
        data.items > 0 ?
        data.todoItems.map((task) => (
          <TodoItem
            key={task._id}
            task={task.todoItem}
            id={task._id}
            deleteItem={deleteItem}
          />
        )): <h2 style={{ padding: "20px" }}>Add Tasks to view</h2>
      }
    
      </ul>
    </div>
  );
};

export default TodoList;

// argumet pass
// global token
// rtk query manage refresh token