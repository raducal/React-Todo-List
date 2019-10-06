import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, id, handleEdit } = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-danger" onClick={() => handleDelete(id)}>
            <i className="fas fa-window-close"></i>
          </span>
          <span className="mx-2 text-success" onClick={() => handleEdit(id)}>
            <i className="fas fa-edit"></i>
          </span>
        </div>
      </li>
    );
  }
}
