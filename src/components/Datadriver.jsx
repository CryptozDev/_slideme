import "./Datadriver.css";

function Datadriver() {
  return (
    <div className="datadriver-container">
      <div className="datadriver">
        <img
          className="profile"
          src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
          alt="โปรไฟล์"
        />
        <div className="name">
          <p>สมชาย</p>
          <p>1กข 1234</p>
          <p>⭐&nbsp;4.9</p>
        </div>
        <div className="button-container">
          <button className="button-icon bi bi-telephone"></button>
          <button className="button-icon bi bi-chat-dots"></button>
        </div>
      </div>

      <div className="data">
        <div className="data-header">
          <h6>ข้อมูลผู้ขับ</h6>
          <p><strong>ชื่อ :</strong> สมชาย ใจดี</p>
          <p><strong>ทะเบียนรถ :</strong> 1กข 1234 กรุงเทพ</p>
          <p><strong>วันที่สมัคร :</strong> 1 ม.ค. 2565</p>
          <p><strong>รหัสประจำตัว :</strong> DR123456</p>
        </div>

        {/* ประวัติการขับขี่ */}
        <div className="driving-history">
          <h6>ประวัติการขับขี่</h6>
          <p><strong>งานที่เสร็จสิ้น :</strong> 120 งาน</p>
          <p><strong>ระยะทางขับขี่ :</strong> 15,000 กม.</p>
          <p><strong>เวลาทำงาน :</strong> 500 ชม.</p>
          <p><strong>คะแนนเฉลี่ยจากลูกค้า :</strong> ⭐ 4.9</p>
        </div>

        {/* รีวิวจากลูกค้า */}
        <div className="reviews">
          <h6>รีวิวจากลูกค้า</h6>
          <div className="review-item">
            <p><strong>ชนะชัย :</strong> บริการดีเยี่ยม ตรงต่อเวลา</p>
            <p><em>เมื่อ 2 วันที่แล้ว</em></p>
          </div>
          <div className="review-item">
            <p><strong>นภัส :</strong> สุภาพและบริการดีมาก</p>
            <p><em>เมื่อ 5 วันที่แล้ว</em></p>
          </div>
          <div className="review-item">
            <p><strong>ศุภชัย :</strong> ขับขี่ปลอดภัยและเอาใจใส่ดี</p>
            <p><em>เมื่อ 1 สัปดาห์ก่อน</em></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datadriver;
