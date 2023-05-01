import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const { signIn } = useContext(AuthContext);

  // navigation in private route
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true }); //navigate in the previous route
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p onClick={() => setShow(!show)}>
            {show ? <span>Hide password</span> : <span>Show password</span>}
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="toggle-login-signUp">
        <small>
          New to Ema-john?{" "}
          <Link to="/signup" className="toggle-link">
            {" "}
            Create new account
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
<h2>Login coming soon</h2>;
