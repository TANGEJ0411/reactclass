import { useEffect, useState } from 'react';

function ChildB(props) {
  const [cData, setCData] = useState('ChildB元件的資料');
  //生命週期，當cData有變化時執行callback，讓Child回傳資料的正解
  useEffect(() => {
    props.setDataFromChild(cData);
  }, [cData]);
  return (
    <>
      <h1>Child B</h1>
      <button
        onClick={() => {
          setCData(999);
        }}
      >
        change cData to 999
      </button>
      {/* <button
        onClick={() => {
          props.setDataFromChild(cData);
        }}
      >
        傳回資料到Parent元件
      </button> */}
    </>
  );
}

export default ChildB;
