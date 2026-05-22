
import Card from "../Components/Card";
import { GiMushroomCloud } from "react-icons/gi";
import bgImg3 from "../assets/Screenshot 2026-05-18 230300.png";
import TemperatureChart from "../Components/TemperatureChart";
import PredictCard from "../Components/PredictCard";
import { useEffect, useState } from "react";

const Home = () => {
    const [tomorrow, setTomorrow] = useState(null);
    useEffect(() => {
        const fetchTomorrow = async () => {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=Cumilla&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();
                if (data.cod !== "200") {
                    console.log(data.message);
                    return;
                }
                // 👉 next day দুপুর approx (index 8-12 এর মধ্যে ভালো)
                const tomorrowData = data.list[8];
                setTomorrow(tomorrowData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTomorrow();
    }, []);

    const getWeatherLabel = (main) => {
        if (main === "Rain") return "Rainy 🌧️";
        if (main === "Clouds") return "Cloudy ☁️";
        if (main === "Clear") return "Sunny ☀️";
        if (main === "Haze") return "Hazy 🌫️";
        return main;
    };


    return (
        <div>
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
                                        <h1 className="text-3xl">
                                            {tomorrow?.main?.temp
                                                ? `${tomorrow.main.temp.toFixed(0)}°C`
                                                : "Loading..."}
                                        </h1>

                                        <p>
                                            {tomorrow
                                                ? getWeatherLabel(tomorrow.weather[0].main)
                                                : "..."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <PredictCard></PredictCard>

            </div>


            <div className="bg-white p-6 rounded-xl shadow h-full max-w-2xl md:ml-20 mt-10">
                <h1 className="text-2xl font-semibold">History</h1>


            </div>



        </div>
    );
};

export default Home;