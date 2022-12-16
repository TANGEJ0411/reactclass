function TodoItem(props) {
  const { id, completed, text, switchCompleted, deleteTodoList } = props;
  return (
    <>
      <li key={id} className={completed ? 'completed' : 'not-completed'}>
        <input
          type="checkbox"
          onChange={() => {
            switchCompleted(id);
          }}
          checked={completed}
        />
        <button
          onClick={() => {
            switchCompleted(id);
          }}
        >
          {completed ? '恢復成未完成' : '設定成已完成'}
        </button>
        {text}
        <button
          onClick={() => {
            deleteTodoList(id);
          }}
        >
          刪除
        </button>
      </li>
    </>
  );
}
export default TodoItem;
