import TodoItem from './TodoItem';
function TodoList(props) {
  const { todos, switchCompleted, deleteTodoList } = props;
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, completed, text } = v;
          return (
            <>
              <TodoItem
                key={id}
                id={id}
                completed={completed}
                text={text}
                switchCompleted={switchCompleted}
                deleteTodoList={deleteTodoList}
              />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
