import registerlogo from "../assets/images/registerlogo.svg";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";
import apple from "../assets/images/apple.svg";
import eye from "../assets/images/eye.svg";
import CustomButton from "../components/CustomButton";
import "../styles/components/register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswordName] = useState("");
  const [confirmPassword, setConfirmPasswordName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    console.log(firstName, lastName, email, password, confirmPassword);
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword
    ) {
      if (password !== confirmPassword) {
        setError("passwords DONOT MATCH!!");
      } else {
        const userData = new FormData();
        userData.append("first_name", firstName);
        userData.append("last_name", firstName);
        userData.append("username", username);
        userData.append("email", email);
        userData.append("password", password);
        axios
          .post("http://127.0.0.1:8000/api/signup/", userData)
          .then((response) => {
            // Handle successful registration
            if (response.status === 201) {
              navigate("/login");
              console.log(response.data);
            } else {
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.error(error.response.data.username[0]);
            setError(error.response.data.username[0]);
          });
      }
    } else {
      setError("please Fill in all the fields");
    }
  };

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={registerlogo} alt="logo" width={"100%"} height={"100%"} />
          </div>
          <div className="col-md-6 col-sm-12 ps-md-5 register-form">
            <h2>Register</h2>
            {error && <div className="error">{error}</div>}

            <div className="form">
              <form>
                <div className="name">
                  <div className="first-name">
                    <label htmlFor="first-name">First Name</label> <br />
                    <input
                      type="text"
                      name="firstName" // Updated name attribute
                      id="first-name"
                      placeholder="James"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="last-name">
                    <label htmlFor="last-name">Last Name</label> <br />
                    <input
                      type="text"
                      name="lastName" // Updated name attribute
                      id="last-name"
                      placeholder="Smith"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="email">
                  <label htmlFor="username">Username</label> <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>

                <div className="email">
                  <label htmlFor="email">Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="seamus.schmidt@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label> <br />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="* * * * * * * * *"
                    onChange={(e) => setPasswordName(e.target.value)}
                  />
                  <img
                    src={eye}
                    alt="eye-icon"
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Confirm Password</label> <br />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="* * * * * * * * *"
                    onChange={(e) => setConfirmPasswordName(e.target.value)}
                  />
                  <img
                    src={eye}
                    alt="eye-icon"
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>

                <div className="register-btn">
                  <CustomButton
                    text={"Register"}
                    styles={{ borderRadius: "4px", width: "160px" }}
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
            <div className="row align-items-center">
              <div
                className="col-4"
                style={{
                  border: "1px solid rgba(21, 24, 109, 0.6)",
                  height: "max-content",
                }}
              ></div>
              <div className="col-4 text-center signup-txt">
                Or sign up with
              </div>
              <div
                className="col-4"
                style={{
                  border: "1px solid rgba(21, 24, 109, 0.6)",
                  height: "max-content",
                }}
              ></div>
              <div className="col-12 text-center">
                <div className="my-3 d-flex align-items-center justify-content-center">
                  <img src={google} alt="google" className="mx-3" />
                  <img src={facebook} alt="facebook" className="mx-3 pt-1" />
                  <img src={apple} alt="apple" className="mx-3 pt-1" />
                </div>
                <p>
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
