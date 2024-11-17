import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {

    const { data: news } = useLoaderData();
    // console.log(news);

    return (
        <div>
            <h2 className="text-[#403F3F] text-xl font-semibold mb-5">Dragon News Home</h2>
            <div className="space-y-8">
                {

                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
 
                }
            </div>
        </div>
    );
};

export default CategoryNews;