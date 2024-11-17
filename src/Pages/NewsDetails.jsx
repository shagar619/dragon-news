import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNav from "../Components/Layout-components/RightNav";
import { FaLongArrowAltLeft } from "react-icons/fa";


const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];

    // console.log(news);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-6">
            <section className="col-span-9 mb-10">
                <h2 className="text-[#403F3F] text-xl font-semibold mb-5">Dragon News</h2>

                <div className="card bg-base-100 rounded border">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#403F3F] text-[25px] font-bold">{news?.title}</h2>
    <p className="text-[#706F6F] text-base font-normal mb-4">{news?.details}</p>
    <div className="card-actions">
      <Link
        to={`/category/${news?.category_id}`}
       className="bg-[#D72050] text-white text-base font-medium border-none py-2 px-5 flex items-center gap-3"><FaLongArrowAltLeft></FaLongArrowAltLeft> All news in this category</Link>
    </div>
  </div>
</div>

</section>

            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;