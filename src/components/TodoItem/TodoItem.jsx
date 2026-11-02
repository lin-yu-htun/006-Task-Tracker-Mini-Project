import "./TodoItem.css";

const TodoItem = (props) => {
    const {
        todoId,
        todoText,
        todoStatus,
        checkTodo,
        deleteTodo
    } = props;

    return (
        <div className={`todo-item ${todoStatus ? "completed" : ""}`}>

            <div className="todo-content">

                <div
                    className="checkbox"
                    onClick={() => checkTodo(todoId)}
                >
                    {todoStatus ? "✓" : ""}
                </div>

                <p className="todo-text">
                    {todoText}
                </p>

            </div>

            <button
                className="delete-btn"
                onClick={() => deleteTodo(todoId)}
            >
                ×
            </button>

        </div>
    );
};

export default TodoItem;