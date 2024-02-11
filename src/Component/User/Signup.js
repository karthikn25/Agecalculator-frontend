import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSignup(e){
    e.preventDefault()
    const newData ={
      username,
      email,
      password
      
    }
    const res = await fetch(`http://localhost:7070/api/user/signup`,{
      method:"POST",
      body:JSON.stringify(newData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await res.json();
    if(data.token){
      setError("")
      localStorage.setItem("token",data.token)
      navigate("/")
    }else{
      setError(data.message)
      localStorage.removeItem("token",data.token)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="login-container">
          <div className="wrapper">
            <span className="bg-animate"></span>
            <div className="form-box login">
              <h2>Signup</h2>
              <form>
                <div className="input-box">
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label>Username</label>
                  <i class="bx bxs-user"></i>
                </div>
                <div className="input-box">
                  <input
                    type="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                  <i class="bx bxs-envelope"></i>
                </div>
                <div className="input-box">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                  <i class="bx bxs-lock-alt"></i>
                </div>
                <div className="show-pass" style={{ textAlign: "end" }}>
                  <span>
                    <input type="checkbox" onClick={togglePasswordVisibility} />
                    <b style={{ color: "#fff", paddingLeft: "5px" }}>Show</b>
                  </span>
                </div>
                <button className="btn" onClick={handleSignup}>SignUp
                </button>
                <div className="logreg-link">
                  <p>
                    Already have an account?
                    <Link to="/" className="register-link">
                      Login
                    </Link>
                  </p>
                  {
                    error ?<div style={{color:"red"}}>{error}</div>:""
                  }
                  
                </div>
              </form>
            </div>
            <div className="info-text">
              <h2 class="bx bxs-hand">Hello Welcome!</h2>
              <p>
                This Application will help you to Find Your Year,Months and Days of Your Life...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
