import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  const [pData, setPDate] = useState('父母元件的資料');
  //專門要給ChildB傳回資料用
  const [dataFromChild, setDataFromChild] = useState('');

  return (
    <>
      <ChildA pData={pData} dataFromChild={dataFromChild} />
      <ChildB setDataFromChild={setDataFromChild} />
      <p>來自ChildB的資料:{dataFromChild}</p>
    </>
  );
}

export default Parent;
