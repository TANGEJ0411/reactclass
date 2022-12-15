import { useState } from 'react';
function AddForm(props) {
  const [inputValue, setInputValue] = useState('');
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          const newTodo = {
            id: Number(new Date()),
            text: event.target.value,
          };

          props.setTodos([newTodo, ...props.todos]);
          setInputValue('');
        }
      }}
    />
  );
}

export default AddForm;
