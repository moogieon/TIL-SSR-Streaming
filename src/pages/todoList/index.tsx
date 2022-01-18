import type { NextPage } from "next";
import { FC } from "react";
import ToDoList, { Props as TodoListProps } from "../../units/todoList/todoList";

const ToDoListPage: FC<TodoListProps> = (props) => {
  return <ToDoList {...props} />;
};

export default ToDoListPage;
