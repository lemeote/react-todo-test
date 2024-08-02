import TodoItem from "../ui/todoItem"
import { NON_DISPLAY, TODO_LIST } from "@/constant";
import { Todo } from "@/types";

interface TodoListProps {
  todos: Todo[];
  onUpdateTodoList: (index:number, todo: Todo) =>void;
  onDeleteTodoList: (index:number)=>void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodoList, onUpdateTodoList }) => {

  return (
    <div className="m-auto mb-9">
      <span className="flex justify-center text-green-500 text-3xl mb-2">
        {todos.length>0?TODO_LIST:NON_DISPLAY}
      </span>
      <div className="flex flex-col gap-[24px]">
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} onDeleteTodo={onDeleteTodoList} onUpdateTodo={onUpdateTodoList} />
        ))}
      </div>
    </div>
  )
}

export default TodoList;