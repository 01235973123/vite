import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css";
import Menu from "../../components/Menu";
import Onboarding from "../../assets/onboarding.svg";
import Uk from "../../assets/uk.svg";
import Us from "../../assets/us.svg";
import Jav from "../../assets/jav.svg";
import Tbn from "../../assets/tbn.svg";
import Balan from "../../assets/balan.svg";
import Bodaonha from "../../assets/bodaonha.svg";
import Content3 from "../../assets/content-3.svg";
import Content4 from "../../assets/content-4.svg";
import Content5 from "../../assets/content-5.svg";
import Confirm from "../../assets/confirm.svg";
import Fb from "../../assets/fb.svg";
import Linked from "../../assets/linked.svg";
import Twitter from "../../assets/twitter.svg";
import Google from "../../assets/google.svg";
import Youtube from "../../assets/youtube.svg";
import ArrowBellow from "../../assets/arrow-bellow.svg";
import Tamnhin from "../../assets/tamnhin.svg";
import Sumenh from "../../assets/sumenh.svg";
import Giatri from "../../assets/giatri.svg";
import Service from "../../assets/service.svg";
import GooglePlay from "../../assets/google-play.svg";
import Ios from "../../assets/ios.svg";
import Bg from "../../assets/bg.svg";
import Bg2 from "../../assets/bg-2.svg";
import "./index.scss";

const Home = () => {
  return (
    <React.Fragment>
      <div className="header">
        <img className="bg-icon" alt="" src={Bg} />
        <img className="bg-icon bg-2" alt="" src={Bg2} />
        <div className="header-one flex-end">
          <Menu />
        </div>
        <div className="header-one">
          <h1 className="title">Phúc Long Express</h1>
        </div>
        <div className="header-one">
          <div className="description-short">
            <b className="mua-h-v6">
              {" "}
              Mua hộ và vận chuyển từ US, EU về Việt Nam.
            </b>
            <div className="chng-ti-vi">{`Tải App để trải nghiệm dịch vụ của chúng tôi `}</div>
            <img className="dowload-icon" alt="" src={GooglePlay} />
            <img className="dowload-icon ios" alt="" src={Ios} />
          </div>
          <img className="onboarding-icon" alt="" src={Onboarding} />
        </div>
      </div>
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
          <p className="text-1">Dịch vụ</p>
          <div className="br-1"></div>
          <p className="text-2">
            Chúng tôi cung cấp đa dạng dịch vụ để khách hàng có thể chọn lựa phù
            hợp với nhu cầu.
          </p>
        </div>
        <div className="body">
          <div className="content-2">
            <img className="Service-icon" alt="" src={Service} />
            <div className="block">
              <div className="block-country">
                <img className="Uk-icon" alt="" src={Uk} />
                <p className="text-3">Mua hộ và vận chuyển UK</p>
              </div>
            </div>
            <div className="block">
              <div className="block-country">
                <img className="Us-icon" alt="" src={Us} />
                <p className="text-3">Mua hộ và vận chuyển US</p>
              </div>
            </div>
            <div className="block">
              <div className="block-country">
                <img className="Jav-icon" alt="" src={Jav} />
                <p className="text-3">Mua hộ và vận chuyển Nhật Bản</p>
              </div>
            </div>
            <div className="block">
              <div className="block-country">
                <img className="Tbn-icon" alt="" src={Tbn} />
                <p className="text-3">Mua hộ và vận chuyển Tây Ban Nha.</p>
              </div>
            </div>
            <div className="block">
              <div className="block-country">
                <img className="Balan-icon" alt="" src={Balan} />
                <p className="text-3">Mua hộ và vận chuyển Ba Lan.</p>
              </div>
            </div>
            <div className="block">
              <div className="block-country">
                <img className="Bodaonha-icon" alt="" src={Bodaonha} />
                <p className="text-3">Mua hộ và vận chuyển Bồ Đào Nha.</p>
              </div>
            </div>
          </div>
          <div className="more">Xem thêm</div>
        </div>
        <div className="content-3">
          <img className="Content3-icon" alt="" src={Content3} />
          <div className="news">
            <h3>Tin tức</h3>
            <div className="br"></div>
            <div className="block-new">
              <img
                className="new-icon"
                alt=""
                src={
                  "https://image.tienphong.vn/600x315/Uploaded/2023/cajwqxjwp/2021_09_04/h1-361-1027.jpeg"
                }
              />
              <div className="info">
                <p className="title">
                  PLExpress post tung dịch vụ đồng giá 30k
                </p>
                <p className="date">Ngày đăng: 30/01/2023</p>
              </div>
            </div>
            <div className="block-new">
              <img
                className="new-icon"
                alt=""
                src={
                  "https://image.tienphong.vn/600x315/Uploaded/2023/cajwqxjwp/2021_09_04/h1-361-1027.jpeg"
                }
              />
              <div className="info">
                <p className="title">
                  PLExpress post tung dịch vụ đồng giá 30k
                </p>
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
            className="mySwiper"
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
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="review">
                <div className="img">
                  <img
                    className="avatar"
                    alt=""
                    src="https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg"
                  />
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
                  <img
                    className="avatar"
                    alt=""
                    src="https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg"
                  />
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
                  <img
                    className="avatar"
                    alt=""
                    src="https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg"
                  />
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
                  <img
                    className="avatar"
                    alt=""
                    src="https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg"
                  />
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
          </Swiper>
        </div>
        <div className="footer">
          <div className="plexpress">
            <p className="title">PLExpress</p>
            <p className="descrip">
              Giao hàng nhanh chóng, thông minh, tiết kiệm với tôn chỉ trải
              nghiệm của khách hàng là những cốt lõi chúng tôi hướng đến. Địa
              chỉ văn phòng: Số 6, Trương Công Giai, Cầu Giấy, Hà Nội Số điện
              thoại liên hệ: 03453545274
            </p>
          </div>
          <div className="about">
            <p className="title">Về PLExpress</p>
            <p className="item">Giới thiệu</p>
            <p className="item">Tin tức</p>
            <p className="item">Tuyển dụng</p>
            <p className="item">Apps</p>
            <p className="item">Chính sách và điều khoản</p>
          </div>
          <div className="about">
            <p className="title">Hỗ trợ khách hàng</p>
            <p className="item">Trung tâm hỗ trợ</p>
            <p className="item">Hỗ trợ liên hệ</p>
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
      </div>
    </React.Fragment>
  );
};

export default Home;
