import React, { useState } from "react";
import "./Notificationsdriver.css";

function Notificationsdriver() {
  const [notifications, setNotifications] = useState([
    "คุณมีงานใหม่ที่ต้องดำเนินการ โปรดตรวจสอบรายละเอียดงาน",
    "ลูกค้าได้ยืนยันตำแหน่งเรียบร้อยแล้ว โปรดเดินทางไปยังจุดรับ",
    "คุณอยู่ใกล้จุดรับลูกค้าแล้ว โปรดตรวจสอบข้อมูลลูกค้า",
    "การส่งรถถึงปลายทางสำเร็จ โปรดตรวจสอบสถานะ",
    "คุณได้รับการชำระเงินเรียบร้อยแล้ว ขอบคุณสำหรับการให้บริการ",
    "มีความคิดเห็นใหม่จากลูกค้า โปรดตรวจสอบการประเมิน",
    "คุณได้รับโบนัสสำหรับการให้บริการดีเยี่ยม!",
    "ระบบได้อัปเดตงานใหม่สำหรับคุณ ตรวจสอบแผนที่สำหรับรายละเอียดเพิ่มเติม",
    "ลูกค้าได้ทำการเปลี่ยนแปลงจุดหมายปลายทาง โปรดตรวจสอบ",
    "เวลาการเดินทางของคุณถูกบันทึกเรียบร้อยแล้ว ขอบคุณสำหรับการทำงาน!",
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-wrapper">
      <div className="notification-header">
        <h2>การแจ้งเตือน 🚗</h2>
        <button
          className="notification-clear-btn bi bi-trash"
          onClick={clearNotifications}
        ></button>
      </div>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <span className="notification-message">{notification}</span>
              <span className="notification-time">
                เมื่อ {2 + index} ชั่วโมงก่อน
              </span>
            </div>
          ))
        ) : (
          <p className="notification-empty">ไม่มีการแจ้งเตือน</p>
        )}
      </div>
    </div>
  );
}

export default Notificationsdriver;
