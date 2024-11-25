import "./Table.css";

function Table() {
  return (
    <div className="table-container">
      <h1>รายละเอียดราคา</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ระยะทาง (กิโลเมตร)</th>
            <th>ราคา (บาท)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 - 15</td>
            <td>1,800</td>
          </tr>
          <tr>
            <td>16 - 30</td>
            <td>2,300</td>
          </tr>
          <tr>
            <td>31 - 45</td>
            <td>2,600</td>
          </tr>
          <tr>
            <td>46 - 60</td>
            <td>2,800</td>
          </tr>
          <tr>
            <td>61 - 75</td>
            <td>3,100</td>
          </tr>
          <tr>
            <td>76 - 100</td>
            <td>3,500</td>
          </tr>
          <tr>
            <td>101 +</td>
            <td>ติดต่อราคาพิเศษ</td>
          </tr>
          <tr>
            <td>500 +</td>
            <td>ติดต่อราคาพิเศษ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;