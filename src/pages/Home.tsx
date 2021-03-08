import * as React from "react";
import Navbar from "../components/Navbar";
import { useSelecteTodo, useTodos } from "../store/app";
import { useAppState } from "../store/auth";

export default function Home() {
  const auth = useAppState();
  const { todos, onSelectTodos } = useSelecteTodo();

  const { app, loading, response, error } = useTodos(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      <Navbar />
      <div className="home mt-5 ml-5">
        <h3 className="text-lg ">
          Welcome
          <strong className="text-blue-500 ml-2">
            {auth.currentUser.username}
          </strong>
        </h3>
        <div className="flex">
          <div className="w-1/2">
            {!loading &&
              app.todos.map((items: any, i: any) => {
                return (
                  <div
                    className="border m-2 p-5 shadow-md cursor-pointer hover:bg-gray-300"
                    onClick={() => onSelectTodos(items)}
                    key={i}
                  >
                    <h3>{items.title}</h3>
                    <h5 className="text-sm">
                      Completed:{" "}
                      {items.completed ? "Completed" : "Not Completed"}
                    </h5>
                  </div>
                );
              })}
          </div>
          {todos.selectedTodo.title && (
            <div className="border m-2 p-5 h-full shadow-md w-1/2">
              <h1 className="mb-3 font-semibold text-blue-500">
                Seelcted Todo:
              </h1>
              <h3>{todos.selectedTodo?.title}</h3>
              <h5 className="text-sm">
                Completed:{" "}
                {todos.selectedTodo?.completed ? "Completed" : "Not Completed"}
              </h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
