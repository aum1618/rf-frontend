import registerlogo from "../assets/images/registerlogo.svg";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";
import apple from "../assets/images/apple.svg";
import eye from "../assets/images/eye.svg";
import CustomButton from "../components/CustomButton";
import "../styles/components/register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { base_url } from "../BASE_URL";
import { UserDataContext } from "../services/context/userDataContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setusername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPasswordName] = useState("");

  const { updateAuthToken, updateUserInfo } = useContext(UserDataContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const userData = new FormData();
      userData.append("username", username);
      userData.append("password", password);
      axios.post(`${base_url}/api/login/`, userData).then((response) => {
        console.log(response.data);
        if (response.data.token) {
          axios
            .get(`${base_url}/api/user-detail/`, {
              headers: {
                Authorization: `Token ${response.data.token}`,
              },
            })
            .then((userResponse) => {
              console.log(userResponse.data);
              updateAuthToken(response.data.token); // Update auth token in the context
              updateUserInfo(userResponse.data); // Update user info in the context
              navigate("/my-account");
            });
        }
      });
    }
  };

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-12 col-md-6 pe-md-5 register-form">
            <h2>Login</h2>
            <div className="form">
              <form>
                <div className="name">
                  <label htmlFor="username">Username</label> <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={(e) => setusername(e.target.value)}
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
                <div className="register-btn">
                  <CustomButton
                    text={"Login"}
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
                Or sign in with
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
                  Don't have an account?<Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={registerlogo} alt="logo" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
}
