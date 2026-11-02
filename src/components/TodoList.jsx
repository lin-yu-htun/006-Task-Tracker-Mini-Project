
import TodoItem from "./TodoItem/TodoItem";

const TodoList = (props) => {

const { todos, checkTodo, deleteTodo } = props;
  

  const todoLists = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todoId={todo.id}
        todoText={todo.text}
        todoStatus={todo.completed}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <div className="task-list">
      {todos.length === 0 ? (
        <div className="empty-state">
          <p>All caught up! Time to learn something new.</p>
        </div>
      ) : (
        todoLists
      )}
    </div>
  );
};

export default TodoList;
 