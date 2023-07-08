import CustomButton from "../components/CustomButton";
import map from "../assets/images/map.svg";
import location from "../assets/images/location.svg";
import number from "../assets/images/number.svg";
import email from "../assets/images/email.svg";
import captcha from "../assets/images/captcha.svg";
import "../styles/components/contact.scss";

export default function Contact() {
  return (
    <>
      <div className="container form mt-5">
        <div className="row">
          <div className="col-12">
            <h3>Contact us</h3>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-lg-7">
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
              <div className="col-12 col-lg-5">
                <div className="inputs">
                  <img src={map} alt="map" width={"100%"} height={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 contact-cards">
        <div className="contact-card">
          <div>
            <img src={location} alt="location" />
          </div>
          <h4>Our Location</h4>
          <p>
            433. N. Camden Drive, Suite <br />
            1000 Beverly Hills, CA 90210
          </p>
        </div>
        <div className="contact-card">
          <div>
            <img src={number} alt="number" />
          </div>
          <h4>Phone Number</h4>
          <p>
            (+01) 654 - 545 - 5418 <br />
            (+01) 654 - 545 - 1235
          </p>
        </div>
        <div className="contact-card">
          <div>
            <img src={email} alt="email" />
          </div>
          <h4>Email Address</h4>
          <p>
            info@ yieldefuchs.org <br />
            310.600.1202
          </p>
        </div>
      </div>
    </>
  );
}
