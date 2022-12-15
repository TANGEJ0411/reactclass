function ChildA(props) {
  const { pData, dataFromChild } = props;
  return (
    <>
      <h1>Child A</h1>
      <p>來自Parent的資料:{pData}</p>
      <p>來自ChildB的資料:{dataFromChild}</p>
    </>
  );
}

export default ChildA;
