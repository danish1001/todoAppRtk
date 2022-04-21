import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useGetTasksQuery, useLoginMutation } from "../../rtkState/todo";

const Login = () => {
  
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const { login } = bindActionCreators(actions, dispatch);

  // const authenticated = useSelector(state => state.authenticate);
  const [login, {isFetching}] = useLoginMutation();

  const loginFun = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/");
  }

  // const { data, isFetching } = useGetTasksQuery();

  // if(isFetching) {
  //   console.log("isFetching loading...");
  // console.log(isFetching);
  // } else {
  //   console.log("data is")
  //   const myData = await data.todoItems;
  //   console.log(myData);
  // }

  useEffect(() => {

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if(isAuthenticated == "true") {
        navigate("/");           // redirects to home route after checking if it is authenticated or not
    }
    // eslint-disable-next-line
  }, []);

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // call action from state for login;
    loginFun(state);
    let response = await login(state);
    let token = response.data.token;
    localStorage.setItem("token", token);

    console.log("submit login clicked");
  }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Login</h1>

        {/* <h1>{isFetching? "loading": `${data.todoItems.length}`}</h1> */}

        <form onSubmit={onSubmit} className="form-container" style={{width: "22rem", margin: "0 auto"}}>

            <div className="mb-3">
              <label className="form-label">email</label>
              <input onChange={onChange} value={state.email} name="email" className="form-control" type="text" placeholder="email"  />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input onChange={onChange} value={state.password} name="password" className="form-control" type="text" placeholder="password"  />
            </div>
            
            <div className="mb-3">
              <input className="form-control btn btn-primary" type="submit" value="Login" />
            </div>
        </form>
        
    </div>
  )
}

export default Login;


