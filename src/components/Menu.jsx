import "./Menu.css";
import { Link } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

function Menu() {
  return (
    <div className="menu1-container">
      {/* <Navbar /> */}
      <div className="menu-profile-section">
        <div className="menu-profile-icon">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/image7f574ac69994f753.png"
            alt="Profile"
          />
        </div>
        <div className="menu-profile-info">
          <div className="menu-profile-name">เด็กชายแดน มองทำไม</div>
          <div className="menu-profile-status">Gold Member</div>
        </div>
        <span className="menu-arrow">›</span>
      </div>
      <div className="menu-items">
        <Link to={"/notifications"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            การแจ้งเตือน<span className="menu-arrow">›</span>
          </div>
        </Link>
        <Link to={"/pricetable"} style={{ textDecoration: "none" }}><div className="menu-item">
          ค่าจัดส่ง<span className="menu-arrow">›</span>
        </div></Link>
        <div className="menu-item">
          ภาษา<span className="menu-arrow">›</span>
        </div>
        <div className="menu-item">
          การตั้งค่า<span className="menu-arrow">›</span>
        </div>
        <Link to={"/report"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            รายงาน<span className="menu-arrow">›</span>
          </div>
        </Link>
        <Link to={"/chat-admin"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            ศูนย์ความช่วยเหลือ<span className="menu-arrow">›</span>
          </div>
        </Link>
        <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
          <div className="menu-item">
            เกี่ยวกับ Slide Me<span className="menu-arrow">›</span>
          </div>
        </Link>
      </div>
      <BottomNavBar />
    </div>
  );
}

export default Menu;
