import { useState } from 'react';
import './Menu.css';

function Menu1() {
  const [active1, setActive1] = useState('');
  const [active2, setActive2] = useState('');
  const [active3, setActive3] = useState('');
  return (
    <>
      <ul>
        <li
          onClick={() => {
            setActive1('active');
            setActive2('');
            setActive3('');
          }}
        >
          <a className={active1} href="#/">
            首頁
          </a>
        </li>
        <li
          onClick={() => {
            setActive2('active');
            setActive1('');
            setActive3('');
          }}
        >
          <a className={active2} href="#/">
            關於我們
          </a>
        </li>
        <li
          onClick={() => {
            setActive3('active');
            setActive2('');
            setActive1('');
          }}
        >
          <a className={active3} href="#/">
            產品
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu1;
