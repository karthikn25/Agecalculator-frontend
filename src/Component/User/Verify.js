import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Verify() {
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const [showPassword, setShowPassword] = useState(false);
 const { id } = useParams();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleVerify =async(e)=>{
    e.preventDefault();
    const userDetails={
      password
    } 
    const res = await fetch(`http://localhost:7070/api/user/reset-password`,{
      method:"POST",
      body:JSON.stringify(userDetails)
    })
    const data = await res.json();
    console.log(data);
    if(data){
      setError("")
      navigate("/")
    }
    else{
      setError(data.message)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="login-container">
          <div className="wrapper">
            <span className="bg-animate"></span>
            <div className="form-box login">
              <h2>Verify</h2>
              <form>
                <div className="input-box">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                  <i class="bx bxs-lock"></i>
                </div>
                <div className="show-pass" style={{ textAlign: "end" }}>
                  <span>
                    <input type="checkbox" onClick={togglePasswordVisibility} />
                    <b style={{ color: "#fff", paddingLeft: "5px" }}>Show</b>
                  </span>
                </div>
                <button className="btn" onClick={handleVerify}>Confirm</button>
                <div className="logreg-link">
                  <Link to="/" className="register-link">
                    Login
                  </Link>
                  {
                    error ? <div style={{color:"red"}}>{error}</div>:""
                  }
                </div>
              </form>
            </div>
            <div className="info-text login">
              <h2 class="bx bx-lock-open-alt">Verify</h2>
              <p>
                Change your <u>Thoughts</u> and you change your <u>World</u>!!!.
                And now Change your Password...{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
