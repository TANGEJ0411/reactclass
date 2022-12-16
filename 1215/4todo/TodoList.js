function TodoList(props) {
  const { todos, switchCompleted, deleteTodoList } = props;
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                onChange={() => {
                  switchCompleted(v.id);
                }}
                checked={v.completed}
              />
              <button
                onClick={() => {
                  switchCompleted(v.id);
                }}
              >
                {v.completed ? '恢復成未完成' : '設定成已完成'}
              </button>
              {v.text}
              <button
                onClick={() => {
                  deleteTodoList(v.id);
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
