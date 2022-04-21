import React from "react";
import Navbar from "./components/pages/Navbar";
import Input from "./components/todoItem/Input";
import TodoList from "./components/TodoList";
import axios from "axios";
import ToDoService from "./service/ToDoService";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/pages/Login";
import PrivateRoute from "./routing/PrivateRoute";
import {useDispatch} from "react-redux";


const App = () => {

  localStorage.setItem("isAuthenticated", "false");

    return (
      <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );

}

export default App;
