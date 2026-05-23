
import Card from "../Components/Card";
import { GiMushroomCloud } from "react-icons/gi";
import bgImg3 from "../assets/Screenshot 2026-05-18 230300.png";
import TemperatureChart from "../Components/TemperatureChart";
import PredictCard from "../Components/PredictCard";
import { useEffect, useState } from "react";

const Home = () => {
    const [tomorrow, setTomorrow] = useState(null);
    const [city, setCity] = useState("Dhaka");
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTomorrow = async () => {
            try {
                setLoading(true);
                const API_KEY = import.meta.env.VITE_API_KEY;
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();
                if (data.cod !== "200") {
                    console.log(data.message);
                    return;
                }
                // 👉 next day দুপুর approx (index 8-12 এর মধ্যে ভালো)
                const tomorrowData = data.list[8];
                setTomorrow(tomorrowData);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTomorrow();
    }, [city]);

    const getWeatherLabel = (main) => {
        if (main === "Rain") return "Rainy 🌧️";
        if (main === "Clouds") return "Cloudy ☁️";
        if (main === "Clear") return "Sunny ☀️";
        if (main === "Haze") return "Hazy 🌫️";
        return main;
    };


    return (
        <div>
            <div className="mx-10 md:mx-30 flex items-center gap-2 mb-5">

                {/* INPUT WRAPPER */}
                <div className="flex items-center  bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-300">

                    {/* Search Icon */}
                    <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

                    {/* Input */}
                    <input
                        type="search"
                        placeholder="Search city..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                    />
                </div>

                {/* BUTTON */}
                <button onClick={() => setCity(inputValue)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-200"
                    type="button"
                >
                    Search
                </button>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 p-4">

                {/* LEFT SIDE */}
                <div className="md:col-span-2">
                    <div className="grid grid-rows-2 gap-5 h-full">

                        <div>
                            <Card city={city}></Card>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 mr-20">
                            <div className="col-span-2">

                                <TemperatureChart city={city}></TemperatureChart>
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
                                            <h1 className="text-2xl font-semibold">{city}</h1>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="text-3xl">
                                            {loading
                                                ? "Loading..."
                                                : `${tomorrow?.main?.temp.toFixed(0)}°C`}
                                        </h1>

                                        <p>
                                            {loading
                                                ? "..."
                                                : getWeatherLabel(tomorrow.weather[0].main)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PredictCard city={city}></PredictCard>

            </div>


            <div className="bg-white p-6 rounded-xl shadow h-full max-w-2xl md:ml-20 mt-10">
                <h1 className="text-2xl font-semibold">History</h1>


            </div>



        </div>
    );
};

export default Home;