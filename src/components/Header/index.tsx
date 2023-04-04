import "../../pages/Home/index.scss";
import MenuToggle from "../Menu";
import Onboarding from "../../assets/onboarding.svg";
import Logo from "../../assets/logo.svg";
import GooglePlay from "../../assets/google-play.svg";
import Bg from "../../assets/bg.svg";
import Bg2 from "../../assets/bg-2.svg";
import Ios from "../../assets/ios.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="bg-icon" alt="" src={Bg} />
      <img className="bg-icon bg-2" alt="" src={Bg2} />
      <div className="header-one top">
        <div className="left">
          <img className="logo-icon" alt="" src={Logo} />
          <h1 className="title">Phúc Long Express</h1>
        </div>
        <MenuToggle />
      </div>
      <div className="header-one second">
        <div className="description-short">
          <b className="mua-h-v6">
            {" "}
            Mua hộ và vận chuyển từ US, EU về Việt Nam.
          </b>
          <div className="chng-ti-vi">{`Tải App để trải nghiệm dịch vụ của chúng tôi `}</div>
          <div className="dowload">
            <img className="dowload-icon" alt="" src={GooglePlay} />
            <img className="dowload-icon ios" alt="" src={Ios} />
          </div>
        </div>
        <img className="onboarding-icon" alt="" src={Onboarding} />
      </div>
    </div>
  );
};

export default Header;
