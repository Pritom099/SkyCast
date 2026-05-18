import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div className=' w-full  py-4 md:py-8 lg:py-10 flex-1 bg-base-200'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;