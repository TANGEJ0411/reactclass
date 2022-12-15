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
          props.addTodo(inputValue);
          setInputValue('');
        }
      }}
    />
  );
}

export default AddForm;
