import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async(e)=>{
   e.preventDefault();
   const userDetail = {
     email,
     password
   }
   const res = await fetch(`http://localhost:7070/api/user/login`,{
     method:"POST",
     body:JSON.stringify(userDetail),
     headers:{
       "Content-Type":"application/json"
     }
   });
   const data = await res.json()
   if(data.token){
     setError("")
     localStorage.setItem("token",data.token)
     navigate("/home")
   }else{
     setError(data.message)
     localStorage.removeItem("token",data.token)
     localStorage.removeItem("id",data._id)
   
   }
   
 }
  return (
    <div className="container">
      <div className="row">
        <div className="login-container">
          <div className="wrapper">
            <span className="bg-animate"></span>
            <div className="form-box login">
              <h2>Login</h2>
              <form>
                <div className="input-box">
                  <input type="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
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
                <div className="show-pass">
                  <span>
                    <input type="checkbox" onClick={togglePasswordVisibility} />
                    <b style={{ color: "#fff", paddingLeft: "5px" }}>Show</b>
                  </span>
                </div>
                <div className="logreg-link">
                  <Link to="/forget" className="register-link">
                    Forget Password
                  </Link>
                </div>
                <button className="btn" onClick={handleLogin}>Login</button>
                <div className="logreg-link">
                  <p>
                    Don't have an account?
                    <Link to="/signup" className="register-link">
                      SignUp
                    </Link>
                  </p>
                 {
                  error ? <div style={{color:"red"}}>{error}</div>:""
                 }
                </div>
              </form>
            </div>
            <div className="info-text login">
              <h2>Welcome Back!</h2>
              <p>Hope You all Enjoy to Use This Application...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
