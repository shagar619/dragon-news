import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNav from "../Components/Layout-components/LeftNav";
import RightNav from "../Components/Layout-components/RightNav";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>

            <main className="w-11/12 mx-auto pt-10 grid md:grid-cols-12 gap-6">
            <aside className="left col-span-3">
                <LeftNav></LeftNav>
            </aside>

             <section className="col-span-6">
                <Outlet></Outlet>
            </section>

             <aside className="right col-span-3">
                <RightNav></RightNav>
            </aside>
            </main>
        </div>
    );
};

export default HomeLayout;