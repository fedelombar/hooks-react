import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";

import "./styles.css";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];

  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: "Learn React",
  //       done: false,
  //     },
  //   ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChanges, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Block empty content from uploading.
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Learn..."
              autoComplete="off"
              value={description}
              onChange={handleInputChanges}
            />

            <button className="btn btn-outline-primary mt-1 btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
