
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {

  const { createNewUser, setUser, updateUserProfile } =useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data

    const form = new FormData(e.target);
    const name = form.get("name");
    if(name.length < 5){
      setError({...error, name: "must be more than 5 character or long!"});
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const terms = form.get("terms");
 
    // console.log({name, photo, email, password, terms});

    createNewUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);
      updateUserProfile({displayName: name, photoURL: photo})
      .then(() => {
        navigate("/");
      })
      .catch(err => {
        // console.log(err);
      })
    })
    .catch(error => {
      // console.log('ERROR', error.message, error.errorCode);
    })
  }





    return (
        <div className="min-h-screen flex justify-center items-center">


<div className="card bg-base-100 rounded w-full max-w-lg shrink-0">

<h2 className="text-[#403F3F] text-2xl font-semibold text-center mt-16">Register your account</h2>

<hr className="mt-6 mx-8" />

      <form onSubmit={handleSubmit} className="card-body">

        <div className="form-control">
            <label className="label">
            <span className="text-[#403F3F] text-base font-semibold">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input bg-[#F3F3F3]   text-[#9F9F9F] text-sm font-normal"/>
        </div>

        {
          error.name &&  <label className="label text-red-600">
          {error.name}
        </label>
        }



        <div className="form-control">
            <label className="label">
            <span className="text-[#403F3F] text-base font-semibold">Photo URL</span>
          </label>
          <input type="url" name="photo" placeholder="Enter your photo URL" className="input bg-[#F3F3F3]   text-[#9F9F9F] text-sm font-normal" />
        </div>

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
          <label className="label">

        <p className="flex items-center mt-1"><input name="terms" type="checkbox" className="checkbox" /><span className="ml-2 text-[#706F6F] text-sm font-normal">Accept Term & Conditions</span></p>

          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#403F3F] rounded">Register</button>
        </div>
        <p className="text-center text-[#9F9F9F] text-sm font-normal mt-3">Already Have An Account ? <Link to="/auth/login" className="text-[#FF8C47] hover:text-green-600">Login</Link> </p>
      </form>
    </div>
            
        </div>
    );
};

export default Register;