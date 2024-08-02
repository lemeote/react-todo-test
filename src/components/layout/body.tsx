import { useState } from "react";

import AddTodo from "../entities/addTodo"
import TodoList from "../entities/todoList"
import { Todo } from "@/types";

const BodyLayout = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddButtonClick = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateButtonClick = (index: number) => {
    const updatedTodos = [...todos];
    if (updatedTodos[index].status === false)
      updatedTodos[index].status = true;
    else
      updatedTodos[index].status = false;
   
    setTodos(updatedTodos);
  }

  const handleDeleteButtonClick = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col gap-[102px]">
      <AddTodo onAddButtonClick={handleAddButtonClick} />
      <TodoList todos={todos} onUpdateTodoList={handleUpdateButtonClick} onDeleteTodoList={handleDeleteButtonClick} />
    </div>
  )
}

export default BodyLayout;