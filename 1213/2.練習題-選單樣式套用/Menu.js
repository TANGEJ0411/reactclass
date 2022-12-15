import { useState } from 'react';
import './Menu.css';

function Menu() {
  const [text, setText] = useState('');
  const menuList = ['首頁', '關於我們', '產品'];
  return (
    <>
      <ul>
        {menuList.map((v, i) => {
          return (
            <li key={i}>
              <a
                className={text === v ? 'active' : ''}
                href="#/"
                onClick={() => {
                  setText(v);
                }}
              >
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
