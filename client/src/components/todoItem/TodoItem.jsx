import React from "react";
// import todoContext from "../../todoContext/TodoContext";

const TodoItem = (props) => {

  

   const deleteItem = (e) => {
    props.deleteItem(props.id)
   }

    return (
      <div>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <h3>{props.task}</h3>
            </div>
            <div className="col">
              <button className="btn btn-sm btn-danger" style={{float: "right"}} onClick={deleteItem}>Delete</button>
            </div>
          </div>
        </li>
      </div>
    );
}

export default TodoItem;
