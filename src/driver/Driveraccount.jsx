import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Driveraccount.css";
import { useNavigate } from "react-router-dom";

function Driveraccount() {
  const navigate = useNavigate();

  const handletodrivinglicense = () => {
    navigate("/driving-license");
  }
  return (
    <div className="Driveraccount-container">
      <div className="Driveraccount-header">
        <h1>SLIDE ME</h1>
      </div>
      <Form className="Driveraccount-form">
        <Form.Group className="mb-3" controlId="formBankAccount">
          <Form.Label>หมายเลขบัญชีธนาคาร</Form.Label>
          <Form.Control type="text" placeholder="กรอกหมายเลขบัญชีธนาคาร" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBankSelect">
          <Form.Label>เลือกธนาคาร</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">ธนาคารกรุงไทย</option>
            <option value="2">ธนาคารกรุงเทพ</option>
            <option value="4">ธนาคารกรุงศรีอยุธยา</option>
            <option value="5">ธนาคารกสิกรไทย</option>
            <option value="6">ธนาคารไทยพาณิชย์</option>
            <option value="7">ธนาคารออมสิน</option>
            <option value="8">ธนาคารอิสลามแห่งประเทศไทย</option>
          </Form.Select>
        </Form.Group>

        <div className="Select-container">
          <button className="Select">
            <i className="bi bi-search"></i>
            <span>ตรวจสอบข้อมูล</span>
          </button>
        </div>

        <Form.Group className="mb-3" controlId="formDisabledInput">
          <Form.Control type="text" disabled readOnly />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="ฉันยอมรับเงื่อนไขและข้อตกลง" />
        </Form.Group>

        <Button variant="success" type="submit" onClick={handletodrivinglicense}>
          ดำเนินการต่อ
        </Button>
      </Form>
    </div>
  );
}

export default Driveraccount;
