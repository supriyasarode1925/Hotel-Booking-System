// import { useState } from 'react';
// import { Container, Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import { Hero } from '../Hooks/Hero';

// export const Login = () => {
//     const [user, setuser]=useState({
//         Email:"",
//         Pass:""
//     })
//     const navigate = useNavigate()
    
//     const handleonchange = (e) => {
//         const{name,value}=e.target
//         setuser((prev)=>({...prev,[name]:value}))
//     }
    
//     const handleFormSubmit=(e)=>{
//         e.preventDefault()
//         if(user.Email==="a@gmail.com" && user.Pass=="pass@123"){
//             localStorage.setItem("isLogin","true")
//             alert("login Sucessfully")
//             navigate("/booking")
//         }
//         else{
//             alert("invalideDetails")
//         }
//     }
    
//     return(
//         <>
//         <Hero />
//         <Container className='my-3'>
//         <Card className='shadow-sm p-4 border-0'>
//             <h1> login</h1>
//             <Form onSubmit={handleFormSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" name="Email" 
//                 value={user.Email} onChange={handleonchange}/>
                
//                 <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" name="Pass" 
//                 value={user.Pass} onChange={handleonchange}/>
//             </Form.Group>
           
//             <Button variant="primary" className='btn-dark' type="submit">
//                Login
//             </Button>
//             </Form>
//         </Card>
//         </Container>

//         <Container className="d-flex justify-content-center align-items-center vh-100">
//         <Card style={{ width: '18rem' }}>
//             <Card.Body>
//             <Card.Title>Centered Card</Card.Title>
//             <Card.Text>
//                 This card is perfectly centered horizontally and vertically.
//             </Card.Text>
//             </Card.Body>
//         </Card>
//         </Container>
//         </>
//     )
// }


import React, { useState } from "react";
import {
  BsEnvelope,
  BsLock,
  BsEye,
  BsEyeSlash,
  BsBuilding
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your login API here.
    console.log("Login details:", {
      ...formData,
      rememberMe
    });
    alert("Login form submitted!");
  };

  return (
    <>
    <div className="hotel-login">
      <section className="login-visual">
        <Link to="/" className="hotel-brand">
          <BsBuilding className="brand-icon" />
          <span>
            <strong>StayEase</strong>
            <small>Comfort Beyond Compare</small>
          </span>
        </Link>

        <div className="visual-content">
          <span className="visual-label">WELCOME TO STAYEASE</span>

          <h1>
            Your Perfect Stay
            <br />
            <span>Awaits.</span>
          </h1>

          <p>
            Book the best hotels, enjoy great experiences,
            and make your journey memorable.
          </p>

          <div className="hotel-benefits">
            <span>✦ Premium Rooms</span>
            <span>☆ Best Prices</span>
            <span>⌖ Prime Locations</span>
          </div>
        </div>

        <div className="visual-footer">
          Discover comfort. Experience hospitality.
        </div>
      </section>

      <section className="login-panel">
        <div className="login-card">
          <div className="login-logo">
            <BsBuilding />
          </div>

          <h2>Welcome Back!</h2>
          <p className="login-subtitle">
            Login to your account to book your next stay
            and manage your reservations.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">Email Address</label>

              <div className="login-input">
                <BsEnvelope />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>

              <div className="login-input">
                <BsLock />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-button">
              Login <span>→</span>
            </button>
         
          </form>

          <div className="login-divider">
            <span />
            <small>OR</small>
            <span />
          </div>

          <button
            type="button"
            className="google-login"
            onClick={() =>
              alert("Connect Google authentication to enable this feature.")
            }
          >
            <strong>G</strong> Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
