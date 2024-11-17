import { Link } from "react-router-dom";
import userIcon from '../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="flex justify-between">
            <div>{user && user.email}</div>
            <div className="nav space-x-5 text-[#706F6F] text-lg font-normal">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login">
                <div className="flex gap-2 items-center">

                    {
                        user && user?.email ? 
                        <div>
                            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div> 
                        : 
                        <img src={userIcon} alt="" />
                    }

                    

                    {
                        user && user.email ? 
                        <Link onClick={logOut} className="bg-[#403F3F] text-white text-xl font-semibold px-10 py-2">Log Out</Link> 
                        :
                        <Link to="/auth/login" className="bg-[#403F3F] text-white text-xl font-semibold px-10 py-2">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;