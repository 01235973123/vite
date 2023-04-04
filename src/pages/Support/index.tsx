import React from "react";
import Header from "../../components/Header";
import RulesImg from "../../assets/rules.svg";
import "./index.scss";
import Footer from "../../components/Footer";

const Support = () => {
  return (
    <div className="support">
      <Header />
      <div className="dieu-khoan">
        <a
          href="https://docs.google.com/document/d/1OlOzRfE96iMrZE8hBxrQaUlzRvpmcFy8_67jLagybI0/edit"
          className="title-rule"
          target={"_blank"}
        >
          Thông tin liên hệ hỗ trợ
        </a>
        <img className="RulesImg-icon" alt="" src={RulesImg} />
      </div>
      <Footer />
    </div>
  );
};

export default Support;
