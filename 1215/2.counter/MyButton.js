function MyButton(props) {
  const { total, setTotal, value } = props;
  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value);
        }}
      >
        {value > 0 ? '+' : ''}
        {value}
      </button>
    </>
  );
}

export default MyButton;
