import { Link, Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";


const MainLaout = () => {



    return (
        <div>

            <section className="max-w-screen-xl mx-auto px-8 md:px-16 border-2 border-red-500 my-10">


                <div className="flex justify-evenly items-center border-2 border-green-500">




                    <div>
                        <h2 className="text-[#1A1919] text-xl md:text-2xl lg:text-3xl font-extrabold">CareerHub</h2>
                    </div>

                    {/* NavLink Start */}
                    <div>
                        <nav>
                            <ul className= "flex gap-5 text-base text-[#757575] font-medium " >
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/appliedJobs" >Applied Jobs</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* NavLink End */}


                    <div>
                        <button className="bg-[#8d7efe] px-3 py-2 rounded-md text-white ">Star Appling</button>
                    </div>
                </div>

                <div className="min-h-screen">
                    <Outlet />
                </div>

                <Footer/>

            </section>

        </div>
    );
};

export default MainLaout;