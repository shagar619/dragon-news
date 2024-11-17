import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="mt-8">
            <h2 className="text-[#403F3F] text-xl font-semibold mb-4">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 rounded-none">
  <button className="btn join-item justify-start"><FaFacebook className="text-blue-500"></FaFacebook><span className="text-[#706F6F] text-base font-medium">Facebook</span></button>
  <button className="btn join-item justify-start"><FaInstagram className="text-orange-600"></FaInstagram><span className="text-[#706F6F] text-base font-medium">Instagram</span></button>
  <button className="btn join-item justify-start"><FaTwitter className="text-blue-600"></FaTwitter><span className="text-[#706F6F] text-base font-medium">Twitter</span></button>
</div>
        </div>
    );
};

export default FindUs;