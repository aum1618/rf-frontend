import "../styles/components/footer.scss";
import footerLogo from "../assets/images/footerLogo.svg";
import fb from "../assets/images/fb.svg";
import linkedin from "../assets/images/linkedin.svg";
import insta from "../assets/images/insta.svg";
import logoBlue from "../assets/images/logoBlue.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="footer-logo">
                <img src={footerLogo} alt="logo" />
                <p className="footer-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-12 pt-4">
              <div className="row">
                <div className="col-12 col-md-4 footer-links">
                  <h4>Main Pages</h4>
                  <div>
                    <ul>
                      <li onClick={() => navigate("/")}>Home</li>
                      <li onClick={() => navigate("/bitcoin/blog")}>To Know</li>
                      <li onClick={() => navigate("/qickview")}>Analysis</li>
                      <li onClick={() => navigate("/blog")}>Blog & News</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4 footer-links">
                  <h4>Contact Info</h4>
                  <div>
                    <ul>
                      <li>Number here</li>
                      <li>Email here</li>
                      <li>Address here</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4 footer-links">
                  <h4>Social Media</h4>
                  <div className="social-imgs">
                    <div>
                      <img src={fb} alt="facebook-icon" />
                    </div>
                    <div>
                      <img src={linkedin} alt="linkedin-icon" />
                    </div>
                    <div>
                      <img src={insta} alt="insta-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yellow-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-3 flex flex-row justify-between align-center"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logoBlue}
                style={{ height: 24, width: 24 }}
                alt="footer-logo"
              />
              <span className="logo-span">Made with responsibility</span>
            </div>
            <div className="col-12 col-lg-9">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <span>
                    RENDITEFUCHS © All Rights Reserved - 2023 - Privacy Policy
                  </span>
                </div>
                <div className="col-12 col-lg-5 spans">
                  <span onClick={() => navigate("/blog")}>Conditions</span>
                  <span onClick={() => navigate("/imprint")}>Imprint</span>
                  <span onClick={() => navigate("/dataprotection")}>
                    Data protection
                  </span>
                  <span onClick={() => navigate("/contact-us")}>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
