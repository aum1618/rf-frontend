import Cover from "../components/Cover";
import "../styles/components/home.scss";
import time from "../assets/images/time.svg";
import dataAnalysis from "../assets/images/dataAnalysis.svg";
import profitHandshake from "../assets/images/profitHandshake.svg";
import one from "../assets/images/one.svg";
import two from "../assets/images/two.svg";
import reviewImgOne from "../assets/images/reviewImgOne.svg";
import reviewImgTwo from "../assets/images/reviewImgTwo.svg";
import star from "../assets/images/star.svg";
import map from "../assets/images/map.svg";
import arrows from "../assets/images/arrows.svg";
import captcha from "../assets/images/captcha.svg";
import Slider from "react-slick";
import CustomButton from "../components/CustomButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const arrowRef = useRef();
  const heading =
    "State-Of-The-Art Financial Market Analysis Your Trading Success Your Time Savings";
  const para =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <>
      <Cover
        heading={heading}
        para={para}
        btnText={"Explore Now"}
        onClick={() => navigate("/login")}
      />
      <div className="time-section">
        <div className="container">
          <div className="row time-relative">
            <div className="col-12 col-md-7 col-lg-5 paragraphs mt-2">
              <h3>Less Stress More Time</h3>
              <p>
                Using time effectively is key to meeting goals and commitments
                by focusing on important tasks. It allows you to take care of
                your personal development and health and give you more freedom
                and control over your life.
              </p>
              <p>
                Our financial market analysis saves time by enabling you to make
                informed and effective trading decisions.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-8 offset-lg-4 mt-2">
              <img src={time} alt="time-pic" width={"100%"} />
            </div>
          </div>
        </div>
      </div>
      <div className="yellowbg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 mt-2">
              <h2 className="analysis-heading">
                Rational Trading Decisions Through Data Analysis
              </h2>
            </div>
            <div className="col-12 col-lg-7 mt-2">
              <img src={dataAnalysis} alt="data-analysis" width={"100%"} />
            </div>
          </div>
          <div className="row blue-row">
            <div className="col-12 col-md-6 col-lg-4 blue-cards">
              <p>
                Our data analysis of the financial markets helps you to base
                decisions on objective facts and reduces the risk of emotionally
                wrong decisions.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 blue-cards">
              <p>
                It also allows you to make faster, more accurate decisions and
                optimize your portfolio performance.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 blue-cards">
              <p>
                By using data analysis, you can ensure that your trading
                decisions are based on solid facts and not emotional reactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="handshake-profit">
        <div className="container">
          <div className="row profit-relative">
            <div className="col-12 col-md-7 col-lg-8 mt-2">
              <img src={profitHandshake} alt="profit" width={"100%"} />
            </div>
            <div className="col-12 col-md-6 mt-2 profit-card">
              <h2>Maximize Your Profits, Minimize Your Losses</h2>
              <p>
                The ability to predict prices gives you a competitive edge as
                you are able to make earlier and more accurate decisions,
                maximizing your profits and minimizing your losses.We give you
                the data you need to make better trading decisions and optimize
                your portfolio performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="success-through">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Success Through Our Data Analysis</h2>
            </div>
          </div>
          <div className="row mt-3 justify-content-between">
            <div className="col-12 col-md-6 para-cols">
              <img src={one} alt="one" />
              <p className="mt-2">
                Increase your chances of winning with our state-of-the-art
                technical data analysis. Thanks to our support, you are always
                in the right place at the right time - regardless of whether you
                want to invest long-term or short-term.
              </p>
            </div>
            <div className="col-12 col-md-6 para-cols">
              <img src={two} alt="two" />
              <p className="mt-2">
                Never miss the perfect entry time again and always exit at the
                right time. Invest in your financial future now and benefit from
                our many years of experience and know-how.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 performance-head">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Performance - Black On White</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="performances-tabs">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 text-center p-3">
              <h2>Number Of Assets</h2>
              <div className="percentage">
                <h2>8th</h2>
              </div>
              <p>Current number of assets analyzed by us.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center p-3">
              <h2>Hit Rate</h2>
              <div className="percentage">
                <h2>82%</h2>
              </div>
              <p>
                Our hit rate since January 1st, 2023 for short-term trading.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center p-3">
              <h2>Happy Costumers</h2>
              <div className="percentage">
                <h2>100%</h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12 review">
              <h2>Users Reviews</h2>
            </div>
            <div className="py-5">
              <Slider {...settings} ref={arrowRef}>
                <div className="single-review">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={reviewImgOne} alt="profile-piv" width="100%" />
                    </div>
                    <div className="description">
                      <div className="d-flex justify-content-between">
                        <p className="name">Hannah K.</p>
                        <div className="stars">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                        </div>
                      </div>
                      <p>
                        “Ich hatte bereits persönlichen Kontakt mit RenditeFuchs
                        und war damit sehr zufrieden. Mir konnte dabei erklärt
                        werden, worauf ich beim Kauf von Kryptowährungen achten
                        sollte, und es werden verständliche Analysen gezeigt,
                        sodass man sich darauf einstellen kann, wie die Zukunft
                        aussehen kann. Vielen Dank nochmal!”
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-review">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={reviewImgTwo} alt="profile-pic" width="100%" />
                    </div>
                    <div className="description">
                      <div className="d-flex justify-content-between">
                        <p className="name">Ronja S.</p>
                        <div className="stars">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                        </div>
                      </div>
                      <p>
                        “Mit RenditeFuchs habe ich einen vertrauensvollen
                        Begleiter an meiner Seite und traue mich an den
                        Kapitalmarkt, an den ich mich ohne diese Unterstützung
                        nicht wagen würde. Während Schule und Erziehung mich
                        nicht darauf vorbereiten konnten meine Finanzen selbst
                        in die Hand zu nehmen, hat es RenditeFuchs in kürzester
                        Zeit geschafft, dass ich mich bereit dazu fühle.”
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-review">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={reviewImgOne} alt="profile-piv" width="100%" />
                    </div>
                    <div className="description">
                      <div className="d-flex justify-content-between">
                        <p className="name">Hannah K.</p>
                        <div className="stars">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                        </div>
                      </div>
                      <p>
                        “Ich hatte bereits persönlichen Kontakt mit RenditeFuchs
                        und war damit sehr zufrieden. Mir konnte dabei erklärt
                        werden, worauf ich beim Kauf von Kryptowährungen achten
                        sollte, und es werden verständliche Analysen gezeigt,
                        sodass man sich darauf einstellen kann, wie die Zukunft
                        aussehen kann. Vielen Dank nochmal!”
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-review">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={reviewImgTwo} alt="profile-pic" width="100%" />
                    </div>
                    <div className="description">
                      <div className="d-flex justify-content-between">
                        <p className="name">Ronja S.</p>
                        <div className="stars">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                        </div>
                      </div>
                      <p>
                        “Mit RenditeFuchs habe ich einen vertrauensvollen
                        Begleiter an meiner Seite und traue mich an den
                        Kapitalmarkt, an den ich mich ohne diese Unterstützung
                        nicht wagen würde. Während Schule und Erziehung mich
                        nicht darauf vorbereiten konnten meine Finanzen selbst
                        in die Hand zu nehmen, hat es RenditeFuchs in kürzester
                        Zeit geschafft, dass ich mich bereit dazu fühle.”
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="arrow-btns">
                <button onClick={() => arrowRef.current.slickPrev()}>
                  <img src={arrows} alt="arrows" />
                </button>
                <button onClick={() => arrowRef.current.slickNext()}>
                  <img src={arrows} alt="arrows" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container form">
        <div className="row">
          <div className="col-12">
            <h3>Contact us</h3>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Name"
                    className="custom-input"
                  />
                </div>
                <div className="inputs">
                  <input
                    type="email"
                    placeholder="Email"
                    className="custom-input"
                  />
                </div>
                <div className="inputs">
                  <input
                    type="number"
                    placeholder="Phone"
                    className="custom-input"
                  />
                </div>
                <div className="inputs">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="9"
                    placeholder="Your message"
                    className="custom-input"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="inputs">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 mt-2">
                      <CustomButton
                        text={"Send Message"}
                        styles={{ borderRadius: "4px" }}
                      />
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                      <img src={captcha} alt="captcha" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="inputs">
                  <img src={map} alt="map" width={"100%"} height={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
