import { TiWeatherPartlySunny } from "react-icons/ti";
import bgImg from "../assets/clouds-4215608_640.jpg";
import bgImg2 from "../assets/photo-1768849059847-bfaab76c00c6.avif";
import { GiFairyWings } from "react-icons/gi";
import { useEffect } from "react";
import { useState } from "react";


const Card = ({city = "Dhaka"}) => {
    const [weather, setWeather] = useState(null);
    const [air, setAir] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;

                // 🌤 Weather API
                const res1 = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                const weatherData = await res1.json();

                if (weatherData.cod !== 200) {
                    console.log(weatherData.message);
                    return;
                }

                setWeather(weatherData);

                // 🌫 Air Quality API (lat lon লাগবে)
                const { lat, lon } = weatherData.coord;

                const res2 = await fetch(
                    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                );

                const airData = await res2.json();
                setAir(airData);

            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [city]);

    const getAQILabel = (aqi) => {
        switch (aqi) {
            case 1:
                return "Good";
            case 2:
                return "Fair";
            case 3:
                return "Moderate";
            case 4:
                return "Poor";
            case 5:
                return "Very Poor";
            default:
                return "Unknown";
        }
    };


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
                        <h1 className="text-3xl">
                            {weather ? `${weather.main.temp}°C` : "Loading..."}
                        </h1>
                        <p>
                            {weather ? weather.weather[0].main : "..."}
                        </p>
                    </div>

                    <div className="flex gap-7">
                        <div className="border p-4 rounded-xl bg-gray-500">
                            <p>Pressure</p>
                            <p className="text-xl font-semibold">{weather?.main.pressure} mb</p>
                        </div>
                        <div className="border p-4 rounded-xl bg-green-500">
                            <p>Visibility</p>
                            <p className="text-xl font-semibold">{weather?.visibility / 1000} km</p>
                        </div>
                        <div className="border p-4 rounded-xl bg-white">
                            <p>Humadity</p>
                            <p className="text-xl font-semibold">{weather?.main.humidity}%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="card w-96 shadow-sm rounded-2xl text-black"
                style={{
                    backgroundImage: `url(${bgImg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="card-body gap-6">

                    {/* HEADER */}
                    <div className="flex gap-4">
                        <h2><GiFairyWings size={30} /></h2>
                        <div>
                            <h1>Air Quality</h1>
                            <p>
                                Pollution: {air ? `PM 2.5 (${air.list[0].components.pm2_5.toFixed(0)})` : "..."}
                            </p>                        </div>
                    </div>

                    {/* AQI VALUE */}
                    <div>
                        <h1 className="text-3xl">
                            {air ? air.list[0].components.pm2_5.toFixed(0) : "Loading..."}
                        </h1>

                        <p>
                            {air ? getAQILabel(air.list[0].main.aqi) : "..."}
                        </p>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-md">

                        {/* Labels */}
                        <div className="flex justify-between text-sm text-black mb-2">
                            <span>Good</span>
                            <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs">
                                {air ? getAQILabel(air.list[0].main.aqi) : "Standard"}
                            </span>
                            <span>Hazardous</span>
                        </div>

                        {/* Bar */}
                        <div className="w-full h-2 bg-gray-200 rounded-full relative">

                            {/* Dynamic width */}
                            <div
                                className="h-2 bg-orange-400 rounded-full"
                                style={{
                                    width: air ? `${air.list[0].main.aqi * 20}%` : "0%",
                                }}
                            ></div>

                            {/* Dot */}
                            <div
                                className="absolute top-[-6px] transform -translate-x-1/2"
                                style={{
                                    left: air ? `${air.list[0].main.aqi * 20}%` : "0%",
                                }}
                            >
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