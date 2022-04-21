import React, { Fragment, useEffect, useState } from "react";
import Input from "../todoItem/Input";
import TodoList from "../TodoList";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated == "false") {
        navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <Input />
      <TodoList />
    </Fragment>
  );
};

export default Home;
