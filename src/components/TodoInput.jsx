const TodoInput = ({ inputText, setInputText, addTodo ,error, setError }) => {

    return (
        <div className="input-container">

            <div className="input-row">
                <input
                    className="task-input"
                    type="text"
                    placeholder="What needs to be done?"
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                        setError("");
                    }}
                />

                <button
                    className="add-btn"
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>

            {error && (
                <p className="error-message">{error}</p>
            )}

        </div>

    );
};

export default TodoInput;