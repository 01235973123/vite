import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./index.scss";
import Uk from "../../assets/uk.svg";
import Us from "../../assets/us.svg";
import Jav from "../../assets/jav.svg";
import Tbn from "../../assets/tbn.svg";
import Balan from "../../assets/balan.svg";
import Bodaonha from "../../assets/bodaonha.svg";
import Content3 from "../../assets/content-3.svg";
import Content4 from "../../assets/content-4.svg";
import Content5 from "../../assets/content-5.svg";
import ArrowBellow from "../../assets/arrow-bellow.svg";
import Tamnhin from "../../assets/tamnhin.svg";
import Sumenh from "../../assets/sumenh.svg";
import Giatri from "../../assets/giatri.svg";
import New1 from "../../assets/new-1.svg";
import New2 from "../../assets/new-2.svg";
import Avatar from "../../assets/avatar.svg";
import Service from "../../assets/service.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Landing = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <div className="content-1">
          <p className="text-1">Giới thiệu chung</p>
          <div className="br-1"></div>
          <p className="text-2">
            Chúng tôi với đội ngũ chuyên nghiệm, trách nhiệm, nhiệt tình, lấy
            khách hàng là cốt lõi phát triển công ty, chúng tôi mong đợi sẽ đưa
            đến cho quý khách những trải nghiệm và dịch vụ tốt nhất.
          </p>
          <div className="about-common">
            <div className="item">
              <img className="icon" alt="" src={Tamnhin} />
              <p className="title">Tầm nhìn</p>
              <p className="descrip">
                Đến năm 2025 trở thành công ty hàng đầu về dịch vụ mua hộ và vận
                chuyển từ UK, EU về Việt Nam.
              </p>
            </div>
            <div className="item">
              <img className="icon" alt="" src={Sumenh} />
              <p className="title">Sứ mệnh</p>
              <p className="descrip">
                Ứng dụng công nghệ, nâng cao chất lượng, đào tạo đội ngũ chuyên
                nghiệp.
              </p>
            </div>
            <div className="item">
              <img className="icon" alt="" src={Giatri} />
              <p className="title">Giá trị cốt lõi</p>
              <p className="descrip">
                Sự hài lòng của khách hàng là trọng tâm mà chúng tôi hướng đến.
              </p>
            </div>
          </div>
        </div>
        <div className="content-1">
          <p className="text-1">Quốc gia hỗ trợ dịch vụ</p>
          <div className="br-1"></div>
          <p className="text-2">
            Chúng tôi cung cấp đa dạng dịch vụ để khách hàng có thể chọn lựa phù
            hợp với nhu cầu.
          </p>
        </div>
        <div className="body">
          <div className="content-2">
            <img className="Service-icon" alt="" src={Service} />
            <Swiper
              style={{ width: "80%", height: 300, padding: "0 20px" }}
              slidesPerView={width < 800 ? 1 : 3}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <img className="Uk-icon" alt="" src={Uk} />
                    <p className="text-3">Mua hộ và vận chuyển UK</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <img className="Us-icon" alt="" src={Us} />
                    <p className="text-3">Mua hộ và vận chuyển US</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <img className="Jav-icon" alt="" src={Jav} />
                    <p className="text-3">Mua hộ và vận chuyển Nhật Bản</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <img className="Balan-icon" alt="" src={Balan} />
                    <p className="text-3">Mua hộ và vận chuyển Ba Lan.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <img className="Bodaonha-icon" alt="" src={Bodaonha} />
                    <p className="text-3">Mua hộ và vận chuyển Bồ Đào Nha.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <img className="Tbn-icon" alt="" src={Tbn} />
                    <p className="text-3">Mua hộ và vận chuyển Tây Ban Nha.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="content-3">
          <img className="Content3-icon" alt="" src={Content3} />
          <div className="news">
            <h3>Tin tức</h3>
            <div className="br"></div>
            <div className="block-new">
              <img className="new-icon" alt="" src={New1} />
              <div className="info">
                <a
                  href="https://baotintuc.vn/kinh-te/logistics-xanh-huong-di-moi-de-phat-trien-ben-vung-20230401073856267.htm"
                  className="title"
                  target="_blank"
                >
                  Logistics xanh- Hướng đi mới để phát triển bền vững
                </a>
                <p className="date">Ngày đăng: 30/01/2023</p>
              </div>
            </div>
            <div className="block-new">
              <img className="new-icon" alt="" src={New2} />
              <div className="info">
                <a
                  href="https://baotintuc.vn/kinh-te/chuyen-doi-so-thuc-day-tang-truong-va-phat-trien-ben-vung-20230321122719141.htm"
                  className="title"
                  target="_blank"
                >
                  Chuyển đổi số thúc đẩy tăng trưởng và phát triển bền vững
                </a>
                <p className="date">Ngày đăng: 30/01/2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-3 nowrap">
          <div>
            <h3>Tải app để trải nghiệm dịch vụ của chúng tôi.</h3>
            <div className="br"></div>
            <p className="descrip">
              Với những tính năng tiện tích, sử dụng đơn giản, nhanh chóng. Vui
              lòng tải app để trải nghiệm ngay:
            </p>
            <div className="more dowload">
              Download
              <img className="arrow-icon" alt="" src={ArrowBellow} />
            </div>
          </div>
          <img className="Content3-icon content4-icon" alt="" src={Content4} />
        </div>
        <div className="content-3 content-5">
          <img className="Content3-icon content5-icon" alt="" src={Content5} />
          <Swiper
            style={{ width: "50%", height: 300, padding: "0 20px" }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mang-luoi"
          >
            <SwiperSlide>
              <div>
                <h3>Mạng lưới đối tác rộng khắp</h3>
                <div className="br"></div>
                <p className="descrip">
                  Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                  đem đến chất lượng tốt nhất cho khách hàng.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Mạng lưới đối tác rộng khắp</h3>
                <div className="br"></div>
                <p className="descrip">
                  Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                  đem đến chất lượng tốt nhất cho khách hàng.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Mạng lưới đối tác rộng khắp</h3>
                <div className="br"></div>
                <p className="descrip">
                  Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                  đem đến chất lượng tốt nhất cho khách hàng.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h3>Mạng lưới đối tác rộng khắp</h3>
                <div className="br"></div>
                <p className="descrip">
                  Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                  đem đến chất lượng tốt nhất cho khách hàng.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="content-6">
          <h3>Khách hàng nói về PLExpress</h3>
          <div className="br"></div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="review">
                <div className="img">
                  <img className="avatar" alt="" src={Avatar} />
                </div>
                <div className="info">
                  <p className="name">Nguyễn Minh Anh</p>
                  <p className="position">Nhân viên văn phòng</p>
                </div>
                <div className="describe">
                  “ Nhân viên giao hàng rất nhiệt tình, tác phong lịch sử. Đó là
                  điều thu hút mình sử dụng dịch vụ của PLExpress trong suốt 1
                  năm qua"
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="img">
                  <img className="avatar" alt="" src={Avatar} />
                </div>
                <div className="info">
                  <p className="name">Phạm Khánh Nguyên</p>
                  <p className="position">Nội trợ</p>
                </div>
                <div className="describe">
                  “ Với tinh thần trách nhiệm cao, nhân viên tại PLExpress đã hỗ
                  trợ tôi rất tận tâm và chu đáo. Tôi thấy thật đúng đắng khi
                  chọn PLExpress là người bạn đáng tin cậy trong những năm qua."
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Landing;