import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Landing/index.scss";
import Confirm from "../../assets/confirm.svg";
import Fb from "../../assets/fb.svg";
import Linked from "../../assets/linked.svg";
import Twitter from "../../assets/twitter.svg";
import Google from "../../assets/google.svg";
import Youtube from "../../assets/youtube.svg";
import Dotblue from "../../assets/dot-blue.svg";
import { PhoneOutlined } from "@ant-design/icons";
import { GoLocation } from "react-icons/go";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const scrollTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <img
        className="dot"
        style={{ top: "2%", right: "0" }}
        alt=""
        src={Dotblue}
      />
      <img
        className="dot"
        style={{ bottom: "0", left: "0" }}
        alt=""
        src={Dotblue}
      />
      <div className="plexpress">
        <p className="title">Phúc Long Express</p>
        <p className="descrip">
          Phúc Long Express là công ty doanh nghiệp chuyên cung cấp dịch vụ vận
          chuyển và mua hộ hàng từ EU, UK về Việt Nam
        </p>
        <p className="descrip">Thông tin liên hệ</p>
        <p className="descrip">
          <span className="icon">
            <GoLocation />
          </span>{" "}
          Văn phòng giao dịch: 60 Trương Công Giai, Dịch Vọng, Cầu Giấy, Hà Nội
        </p>
        <p className="descrip">
          <span className="icon">
            <SiGmail />
          </span>{" "}
          phuclongexpress@gmail.com
        </p>
        <p className="descrip">
          <span className="icon">
            <PhoneOutlined />
          </span>{" "}
          0989000320
        </p>
      </div>
      <div className="about">
        <p className="title">Về Phúc Long Express</p>
        <p className="item">Giới thiệu</p>
        <p className="item">Tin tức</p>
        <p className="item">Tuyển dụng</p>
        <p className="item">Apps</p>
        <Link to="/rules" onClick={scrollTop} className="item">
          Chính sách và điều khoản
        </Link>
      </div>
      <div className="about">
        <p className="title">Hỗ trợ khách hàng</p>
        <p>
          <Link to="/support" onClick={scrollTop} className="item">
            Trung tâm hỗ trợ{" "}
          </Link>
        </p>
        <p>
          <Link to="/support" onClick={scrollTop} className="item">
            Hỗ trợ liên hệ{" "}
          </Link>
        </p>
      </div>
      <div className="social">
        <img className="confirm-icon" alt="" src={Confirm} />
        <p className="title">Liên hệ với chúng tôi</p>
        <div className="list">
          <img className="confirm-icon" alt="" src={Fb} />
          <img className="confirm-icon" alt="" src={Linked} />
          <img className="confirm-icon" alt="" src={Twitter} />
          <img className="confirm-icon" alt="" src={Google} />
          <img className="confirm-icon" alt="" src={Youtube} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
