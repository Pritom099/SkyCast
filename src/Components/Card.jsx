import { TiWeatherPartlySunny } from "react-icons/ti";
import bgImg from "../assets/clouds-4215608_640.jpg";
import bgImg2 from "../assets/photo-1768849059847-bfaab76c00c6.avif";
import { GiFairyWings } from "react-icons/gi";


const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
            <div className="card  w-96 shadow-sm rounded-2xl text-black" style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <div className="card-body gap-6">
                    <div className="flex gap-4">
                        <h2><TiWeatherPartlySunny size={30} /></h2>
                        <div>
                            <h1>Weather</h1>
                            <p>What's the weather.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl">24C</h1>
                        <p>Party Cloudy</p>
                    </div>

                    <div className="flex gap-7">
                        <div className="border p-4 rounded-xl bg-gray-500">
                            <p>Pressure</p>
                            <p className="text-xl font-semibold">800mb</p>
                        </div>
                        <div className="border p-4 rounded-xl bg-green-500">
                            <p>Visibility</p>
                            <p className="text-xl font-semibold">4.3km</p>
                        </div>
                        <div className="border p-4 rounded-xl bg-white">
                            <p>Humadity</p>
                            <p className="text-xl font-semibold">87%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card  w-96 shadow-sm rounded-2xl text-black" style={{
                backgroundImage: `url(${bgImg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <div className="card-body gap-6">
                    <div className="flex gap-4">
                        <h2><GiFairyWings size={30} /></h2>
                        <div>
                            <h1>Air Quality</h1>
                            <p>Pollution: PM 2.5</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl">390</h1>
                        <p>West Wind</p>
                    </div>

                    <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-md">

                        {/* Labels */}
                        <div className="flex justify-between text-sm text-black mb-2">
                            <span>Good</span>
                            <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs">
                                Standard
                            </span>
                            <span>Hazardous</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-200 rounded-full relative">
                            <div className="h-2 bg-orange-400 rounded-full w-[55%]"></div>

                            {/* Indicator Dot */}
                            <div className="absolute top-[-6px] left-[55%] transform -translate-x-1/2">
                                <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;