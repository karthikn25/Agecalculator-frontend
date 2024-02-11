import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const[error,setError] = useState();
  const navigate = useNavigate("");

  const handleForget = async(e)=>{
   e.preventDefault()
   const userDetails ={
    email
   }
   const res = await fetch(`http://localhost:7070/api/user/forgot`,{
    method:"POST",
    body:JSON.stringify(userDetails),
    headers:{
      "Content-Type":"application/json"
    }
   })
   const data = await res.json();
   if(data.user){
    navigate(`/verify/${data.user._id}`)
    localStorage.setItem('userid',data.user._id)
    setError("")
   }
   setError(data.message)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="login-container">
          <div className="wrapper">
            <span className="bg-animate"></span>
            <div className="form-box login">
              <h2>Forgot</h2>
              <form action="#">
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
                <button className="btn" onClick={handleForget}>
                  Verify
                </button>
                <div className="logreg-link">
                  <Link to="/" className="register-link">
                    Login
                  </Link>
                  {
                    error ? <div style={{color:"red"}}>{error}</div> : "" 
                  }
                </div>
              </form>
            </div>
            <div className="info-text login">
              <h2 class="bx bxs-key">Forgot? </h2>
              <p>
                Treat your password like your toothbrush. Don't let anybody else
                use it, and get a new one every six months.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
