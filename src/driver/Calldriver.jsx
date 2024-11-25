import { useState } from "react";

import "./Calldriver.css";

function Calldriver() {
  // สร้าง state การเปิด/ปิดของไมค์, กล้อง, ลำโพง
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [speakerOn, setSpeakerOn] = useState(true);

  // ฟังก์ชันเล่นเสียง
  const playClickSound = () => {
    const audio = new Audio("./public/click-sound.wav");
    audio.play();
  };

  // สลับสถานะไมค์
  const toggleMic = () => {
    playClickSound();
    setMicOn(!micOn);
  };

  // สลับสถานะกล้อง
  const toggleCamera = () => {
    playClickSound();
    setCameraOn(!cameraOn);
  };

  // สลับสถานะลำโพง
  const toggleSpeaker = () => {
    playClickSound();
    setSpeakerOn(!speakerOn);
  };

  return (
    <div className="call-screen-wrapper">
      <div className="call-screen-profile">
        <img
          className="call-screen-profile-pic"
          src="https://img5.pic.in.th/file/secure-sv1/image7f574ac69994f753.png"
          alt="โปรไฟล์"
        />
        <div className="call-screen-name">
          <p>น้องแดน</p>
        </div>
        <div className="call-screen-connection-status">
          <h5>กำลังเชื่อมต่อ...</h5>
        </div>
      </div>

      <div className="call-screen-buttons">
        <div>
          <button onClick={toggleMic}>
            <i className={`bi ${micOn ? "bi-mic" : "bi-mic-mute"}`}></i>
          </button>
          <p className="call-screen-button-label">
            {micOn ? "เปิดไมค์" : "ปิดไมค์"}
          </p>
        </div>

        <div>
          <button onClick={toggleCamera}>
            <i
              className={`bi ${
                cameraOn ? "bi-camera-video-off" : "bi bi-camera-video"
              }`}
            ></i>
          </button>
          <p className="call-screen-button-label">
            {cameraOn ? "ปิดกล้อง" : "เปิดกล้อง"}
          </p>
        </div>

        <div>
          <button onClick={toggleSpeaker}>
            <i className={`bi ${speakerOn ? "bi-volume-mute" : "bi-volume-up"}`}></i>
          </button>
          <p className="call-screen-button-label">
            {speakerOn ? "ปิดลำโพง" : "เปิดลำโพง"}
          </p>
        </div>
      </div>

      <div className="call-screen-end-button">
        <button>
          <i className="bi bi-x-lg"></i>
        </button>
        <p className="call-screen-button-label">วางสาย</p>
      </div>
    </div>
  );
}

export default Calldriver;

