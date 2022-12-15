function TodoList(props) {
  return (
    <>
      <ul>
        {props.todos.map((v, i) => {
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                onChange={() => {
                  const newTodos = props.todos.map((v2) => {
                    return { ...v2 };
                  });
                  newTodos[i].completed = !newTodos[i].completed;
                  props.setTodos(newTodos);
                }}
                checked={v.completed}
              />
              <button
                onClick={() => {
                  const newTodos = props.todos.map((v2) => {
                    return { ...v2 };
                  });
                  newTodos[i].completed = !newTodos[i].completed;
                  props.setTodos(newTodos);
                }}
              >
                {v.completed ? '恢復成未完成' : '設定成已完成'}
              </button>
              {v.text}
              <button
                onClick={() => {
                  props.setTodos(
                    props.todos.filter((v3, i3) => v.id !== v3.id)
                  );
                }}
              >
                刪除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
