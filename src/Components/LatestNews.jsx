import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-5 bg-[#F3F3F3] p-4">
            <p className="bg-[#D72050] text-white text-lg font-medium py-2 px-6">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo maxime temporibus pariatur</Link>
                
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo maxime temporibus pariatur</Link>
                <Link to="/news">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo maxime temporibus pariatur</Link>

            </Marquee>
        </div>
    );
};

export default LatestNews;