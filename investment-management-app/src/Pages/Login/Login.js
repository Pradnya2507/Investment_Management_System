import "../Login/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.jpeg";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { MdOutlineMail } from "react-icons/md";
import { GoKey } from "react-icons/go";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    axios.get(`http://localhost:5000/users`,{
      params:{
        email,
        password
      }
    })
    .then((res)=>{
      if(res.data.length>0){
        localStorage.setItem("userEmail",res.data[0].email);
        
        navigate("/dashboard");
      } else{
        
        setError("Invalid email or password")
      }
    })
    .catch(()=>{
      setError("Server Error")
    })
  }


  return (
    <div className="page">
      <div className="container">
       <div className="header">
      <img src={logo} alt="logo" className="logo" />

      <div className="header-text">
        <h2>Investment Management</h2>
        <p className="subtitle">Login to your account</p>
      </div>
</div>

        <hr />

        <form onSubmit={handleLogin}>
          <div className="input-box">
            <span className="icon"> <MdOutlineMail /></span>
            {/* <Form.Label >Email
           
            </Form.Label> */}
            
              <Form.Control
              
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
              
            

          </div>

          <div className="input-box">
            <span className="icon"><GoKey /></span>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          {error && <p className="error">{error}</p>}
          <hr></hr>
          

                  <div className="d-flex justify-content-between mb-3">
                    <Form.Check
                      type="checkbox" 
                      label="Remember me"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="green-checkbox"

                    />
          </div>

          <p className="signup">
            Don’t have an account? <a href="/signup" >Sign Up </a>
          </p>
        </form>
      </div>


    </div>
  );
}

export default Login;
