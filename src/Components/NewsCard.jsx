

import { FaStar } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {

    // console.log(singleNews);

    const { title, thumbnail_url, details, total_view, _id } = singleNews;

    return (
        <div>
            <div className="bg-white border rounded-lg pb-5">
            {/* Author and date */}
            <div className="flex items-center justify-between mb-4 bg-[#F3F3F3] p-5">
                <div className="flex items-center space-x-2">
                    <img
                        src={singleNews.author.img}
                        alt={singleNews.author.name}
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-medium">{singleNews.author.name}</p>
                        <p className="text-xs text-gray-500">{singleNews.author.published_date}</p>
                    </div>
                </div>
                {/* Share icon */}
                <div className="text-gray-600 cursor-pointer flex items-center gap-3">
                    <CiBookmark></CiBookmark>
                    <CiShare2></CiShare2>
                </div>
            </div>

            {/* Article title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2 px-4">{title}</h2>

            {/* Image */}
            <img
                src={thumbnail_url}
                alt="Article Thumbnail"
                className="w-full h-[400px] object-cover rounded-lg mb-4 px-4"
            />

            {/* Article details */}
            <p className="text-sm text-gray-600 line-clamp-3 mb-4 px-4">{details}</p>
            <Link
                to={`/singleNews/${_id}`}
                className="text-blue-600 font-medium hover:underline px-4"
            >
                Read More
            </Link>

            <hr className="my-5 mx-4" />

            {/* Ratings and Views */}
            <div className="flex items-center justify-between mt-4 mx-4">
                <div className="flex items-center text-orange-400">
                    <FaStar />
                    <p className="ml-1 text-sm font-medium">{singleNews.rating.number}</p>
                    <p className="ml-1 text-xs text-gray-500">({singleNews.rating.badge})</p>
                </div>
                <div className="flex items-center text-gray-600">
                    <BiShow />
                    <p className="ml-1 text-sm">{total_view}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewsCard;