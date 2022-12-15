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
                  props.switchCompleted(v.id);
                }}
                checked={v.completed}
              />
              <button
                onClick={() => {
                  props.switchCompleted(v.id);
                }}
              >
                {v.completed ? '恢復成未完成' : '設定成已完成'}
              </button>
              {v.text}
              <button
                onClick={() => {
                  props.deleteTodoList(v.id);
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
