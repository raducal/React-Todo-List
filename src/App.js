import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let task = {
      id: this.state.id,
      title: this.state.item
    };
    // task.id = this.state.id;
    this.setState(
      {
        items: [...this.state.items, task],
        item: "",
        id: uuid(),
        editItem: false
      },
      () => console.log(this.state.items)
    );
  };

  clearList = () => {
    console.log("clear");
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const sortedList = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: sortedList
    });
  };

  handleEdit = id => {
    const sortedList = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: sortedList,
      item: selectedItem.title,
      id: id,
      editItem: true
    });

    // const item = this.state.items.filter(item => item.id === id);

    // let task = {
    //   id: item[0].id,
    //   title: item[0].title
    // };

    // let title = `${task.title}`;
    // let itemid = task.id;
    // console.log(title);
    // this.setState({
    //   // items: sortedList,
    //   item: title,
    //   id: itemid
    // });
    // console.log(this.state.items);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capatalize text-center">todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
