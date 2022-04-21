// import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  // static propTypes = {};

  // const dispatch = useDispatch();

  // const { logOut } = bindActionCreators(actions, dispatch)

  // const myState = useSelector(state => state.authenticate);

  const [state, setState] = useState({
    myUser: null
  })

  const logout = () => {
    // logOut();
  }

  // useEffect(() => {
  //   setState({myUser: myState.user});
  // }, [myState.user])
  

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" to="/">
              TODO React App 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul> */}

            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <h3 style={{color: "white"}}>{state.myUser === null?" Welcome user": `Welcome ${state.myUser.name}`} </h3>
              </li>
              <li>
                {state.myUser !== null && <button onClick={logout} className="btn btn-primary">Logout</button>}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );

}

export default Navbar;
