import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleDelete, clearList, handleEdit } = this.props;
    return (
      <ui className="list-group my-3">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {items.map(item => (
          <Item
            key={item.id}
            title={item.title}
            id={item.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        <button
          className="btn btn-danger btn-block text-uppercase my-5"
          type="button"
          onClick={clearList}
        >
          Clear
        </button>
      </ui>
    );
  }
}
