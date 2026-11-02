import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {

const [todos, setTodos] = useState([
    { id: 1, text: "Review React Props", completed: false },
    { id: 2, text: "Design UI for Learnex Space", completed: true },
])

const completedTasks = todos.filter(
    (todos) => todos.completed
);

const [inputText, setInputText] = useState("");
const [error, setError] = useState("");


const addTodo = () => {
    if (inputText.trim() === "") {
        setError("Please enter a task before adding");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
    setError("");
};

const checkTodo = (id) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    );
};

const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};

    return <div className="app-container">
        <div className="todo-card">
            <Header />
            <p>Total Tasks: {todos.length}</p>

            <p>Completed : {completedTasks.length} / {todos.length}</p>

            <TodoInput
                inputText={inputText}
                setInputText={setInputText}
                addTodo={addTodo}
                error={error}
                setError={setError}
            />

            <TodoList
                todos={todos}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    </div>
    

}
export default App; 