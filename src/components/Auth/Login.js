import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../service/ApiService";
import { toast } from "react-toastify";
const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    let data = await postLogin(email, password);
    console.log(">>> check data login: ", data);
    if (data && data.EC === 0) {
      toast.success("Create new user success");
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Sign up
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
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-submit" onClick={() => handleLogin()}>
          Log in
        </button>
        <div className="back-home">
          <span onClick={() => navigate("/")}>&#8592; Back to home</span>
        </div>
      </div>
    </div>
  );
};
export default Login;
