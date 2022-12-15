import data from './data/products.json';
import './ProductTable.css';

function ProductTable(props) {
  return (
    <>
      <table>
        <thead>
          <th>ID</th>
          <th>圖片</th>
          <th>名稱</th>
          <th>價格</th>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} alt="圖片" />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
