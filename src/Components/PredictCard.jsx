import { useEffect, useState } from "react";


const PredictCard = ({ city = "Dhaka" }) => {

    const [weather, setWeather] = useState(null);

    const [forecast, setForecast] = useState([]);

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

                // 🌦 FORECAST API (👉 এখানে বসবে তোমার code)
                const res3 = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
                );

                const forecastData = await res3.json();
                setForecast(forecastData?.list || []);

            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [city]);

    const uniqueDates = [];

    const filteredForecast = forecast?.filter((item) => {
        const date = item.dt_txt.split(" ")[0];

        if (!uniqueDates.includes(date)) {
            uniqueDates.push(date);
            return true;
        }
        return false;
    });

    return (
        <div className="bg-[#f5f5f5] min-h-screen p-5 text-black">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold">{weather?.weather?.[0]?.main || "Loading..."}</h1>

                    <p className="text-gray-500 text-sm">
                        {weather?.name}, {weather?.sys?.country}
                    </p>
                </div>
                <h1 className="text-5xl font-bold text-orange-500">
                    {(weather?.main?.temp)}°C
                </h1>
            </div>

            <div className="mt-10 flex justify-center">
                <div className="relative w-64 h-32">
                    {/* Arc */}
                    <div className="absolute w-full h-full border-t-[3px] border-dashed border-orange-300 rounded-t-full"></div>
                    {/* Sun */}
                    <div className="absolute left-1/2 top-2 -translate-x-1/2 text-orange-400 text-3xl">
                        {weather?.weather?.[0]?.main === "Clouds" ? "☁️" : "☀️"}
                    </div>
                    {/* Line */}
                    <div className="absolute bottom-0 w-full border-t-2 border-orange-400"></div>
                </div>
            </div>

            <div className="bg-[#13203b] text-white rounded-3xl p-5 mt-10 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">

                    <div className="text-4xl text-orange-400">
                        ☀️
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">
                            20 UVI
                        </h1>
                        <p className="text-gray-300">
                            Moderate risk of UV rays
                        </p>
                    </div>
                </div>

                <button className="bg-lime-300 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Moderate
                </button>

            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold mb-6">
                    Weather Prediction
                </h1>
                <div className="space-y-4">
                    {filteredForecast?.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-5 flex justify-between items-center shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">
                                    {item.weather[0].main === "Clouds" ? "☁️" : "☀️"}
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm">
                                        {new Date(item.dt_txt).toDateString()}
                                    </p>

                                    <h1 className="text-xl font-semibold">
                                        {item.weather[0].main}
                                    </h1>
                                </div>
                            </div>

                            <h1 className="text-orange-500 font-bold text-xl">
                                {Math.round(item.main.temp)}°
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-2xl mt-8 text-lg font-semibold shadow-lg hover:bg-orange-600 duration-300">
                Next 3 Days
            </button>
        </div>
    );
};

export default PredictCard;