import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { postSignUp } from "../../service/ApiService";
import { toast } from "react-toastify";
const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    } else {
      let data = await postSignUp(email, username, password);
      console.log(">>> check data sign up: ", data);
      if (data && data.EC === 0) {
        toast.success("Sign up success");
        navigate("/login");
      } else {
        toast.error(data.EM);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </button>
      </div>
      <div className="title">HoangAn</div>
      <div className="welcome">Hello, who's this?</div>
      <div className="content-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn-submit" onClick={() => handleSignUp()}>
          Sign Up
        </button>
        <div className="back-home">
          <span onClick={() => navigate("/")}>&#8592; Back to home</span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
