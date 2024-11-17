import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] text-xl font-semibold mb-4">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn text-blue-400 border-blue-500"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn border-gray-400"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;