import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-8">
            <div className="logo">
                <img className="w-[470px] h-16" src={logo} alt="" />
            </div>
            <h3 className="text-lg text-[#706F6F] font-normal">Journalism Without Fear or Favour</h3>
            <p className="text-[#403F3F] text-xl font-medium">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;