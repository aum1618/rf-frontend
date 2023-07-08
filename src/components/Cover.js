import "../styles/components/cover.scss";
import logoLarge from "../assets/images/logoLarge.svg";
import CustomButton from "./CustomButton";

export default function Cover({ heading, para, btnText, width, onClick }) {
  return (
    <div className="cover-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7">
            <h1>{heading}</h1>
            <p>{para}</p>
            <div style={{ marginTop: "50px", width }}>
              <CustomButton
                text={btnText}
                onClick={onClick}
                styles={{ borderRadius: "4px" }}
              />
            </div>
          </div>
          <div className="col-5">
            <img src={logoLarge} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
