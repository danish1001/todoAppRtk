import React, { useState } from "react";
import { useAddTaskMutation, useGetTasksQuery } from "../../rtkState/todo";

const Input = () => {


  const [addTask, { isLoading, isSuccess }] = useAddTaskMutation();

  const  {refetch, data, isFetching } = useGetTasksQuery();

  const [state, setState] = useState({
    task: ""
  })

    const handleChange = (e) => {
        setState({
            task: e.target.value
        })
    }

    const addTaskNow = async e => {
        e.preventDefault();

        if(state.task !== "") {
          const payload = {
            "todoItem": state.task
          }
          const res = await addTask(payload);

          console.log(res.data);

          refetch();
          
          setState({task: ""})
        }
    }

    return (
      <form onSubmit={addTaskNow}>
        <div className="row d-flex justify-content-center" style={{margin: "20px"}}>
          <div className="col-auto">
            <input
            onChange={handleChange} value={state.task}
              className="form-control"
              type="text"
              placeholder="enter task"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    );
}

export default Input;