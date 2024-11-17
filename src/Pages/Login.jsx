import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

  const { loginUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    loginUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);
      navigate(location.state? location.state : "/");

    })
    .catch(err => {
      setError({...error, login:err.code})
    })
  }

    return (
        <div className="min-h-screen flex justify-center items-center">


<div className="card bg-base-100 rounded w-full max-w-lg shrink-0">

<h2 className="text-[#403F3F] text-2xl font-semibold text-center mt-16">Login your account</h2>

<hr className="mt-6 mx-8" />

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
            <label className="label">
            <span className="text-[#403F3F] text-base font-semibold">Email address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input bg-[#F3F3F3]   text-[#9F9F9F] text-sm font-normal" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-[#403F3F] text-base font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input bg-[#F3F3F3] text-[#9F9F9F] text-sm font-normal" required />

          {
            error.login && <label className="label text-red-600">{error.login}</label>
          }


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#403F3F] rounded">Login</button>
        </div>
        <p className="text-center text-[#9F9F9F] text-sm font-normal mt-3">Dont’t Have An Account ? <Link to="/auth/register" className="text-[#FF8C47] hover:text-green-600">Register</Link> </p>
      </form>
    </div>
            
        </div>
    );
};

export default Login;