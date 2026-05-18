
import Card from "../Components/Card";
import {  GiMushroomCloud } from "react-icons/gi";
import bgImg3 from "../assets/Screenshot 2026-05-18 230300.png";
import TemperatureChart from "../Components/TemperatureChart";

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 p-4">

            {/* LEFT SIDE */}
            <div className="md:col-span-2">
                <div className="grid grid-rows-2 gap-5 h-full">

                    <div>
                        <Card></Card>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 mr-20">
                        <div className="col-span-2">
                            
                            <TemperatureChart city="Dhaka"></TemperatureChart>
                        </div>

                        <div className="card  bg-white shadow-sm rounded-2xl text-black" style={{
                            backgroundImage: `url(${bgImg3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                        }}>

                            <div className="card-body gap-6">
                                <div className="space-y-3">
                                    <h2><GiMushroomCloud size={30} /></h2>
                                    <div>
                                        <p className="text-lg">Tomorrow</p>
                                        <h1 className="text-2xl font-semibold">Cumilla</h1>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="text-3xl">20C</h1>
                                    <p>Rainy</p>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow h-full">
                    History
                </div>
            </div>

        </div>
    );
};

export default Home;