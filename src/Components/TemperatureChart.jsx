import { useEffect, useState } from "react";
import { FaUmbrella } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";
import { WiDayCloudyWindy } from "react-icons/wi";

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    YAxis,
    CartesianGrid,
} from "recharts";

const TemperatureChart = ({ city }) => {
    const [data, setData] = useState([]);

    

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
                );

                const json = await res.json();

                if (json.cod != 200) {
                    console.log(json.message);
                    return;
                }

                const list = json.list || [];

                const formatted = [
                    {
                        time: "Morning",
                        temp: Number(list[0]?.main?.temp?.toFixed(1)) || 0,
                    },
                    {
                        time: "Afternoon",
                        temp: Number(list[3]?.main?.temp?.toFixed(1)) || 0,
                    },
                    {
                        time: "Evening",
                        temp: Number(list[6]?.main?.temp?.toFixed(1)) || 0,
                    },
                    {
                        time: "Night",
                        temp: Number(list[9]?.main?.temp?.toFixed(1)) || 0,
                    },
                ];

                setData(formatted);

            } catch (error) {
                console.log(error);
            }
        };

        if (city) {
            fetchWeather();
        }
    }, [city]);

    return (
        <div className="w-full rounded-[30px] bg-gradient-to-br from-white to-orange-50 p-6 shadow-xl border border-orange-100">

            {/* HEADER */}
            <div className="flex items-start justify-between mb-2">

                <div>
                    <p className="text-orange-500 font-medium mb-2">
                        Temperature
                    </p>

                    <h1 className="text-3xl font-bold leading-[1.1] text-gray-800">
                        How's the <br />
                        temperature today?
                    </h1>
                </div>

                <div className="flex gap-4 text-orange-500 mt-3">
                    <PiSunLight
                        size={30}
                        className="hover:scale-110 duration-300"
                    />

                    <FaUmbrella
                        size={26}
                        className="hover:scale-110 duration-300"
                    />

                    <WiDayCloudyWindy
                        size={34}
                        className="hover:scale-110 duration-300"
                    />
                </div>
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height={170}>
                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="5 5"
                        vertical={false}
                        stroke="#fed7aa"
                    />

                    <XAxis
                        dataKey="time"
                        tick={{
                            fill: "#6b7280",
                            fontSize: 14,
                            fontWeight: 500,
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        unit="°C"
                        tick={{
                            fill: "#6b7280",
                            fontSize: 13,
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip
                        contentStyle={{
                            background: "#fff",
                            borderRadius: "16px",
                            border: "none",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                        formatter={(value) => [`${value}°C`, "Temperature"]}
                    />

                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#f97316"
                        strokeWidth={4}
                        dot={{
                            r: 7,
                            strokeWidth: 3,
                            fill: "#fff",
                            stroke: "#f97316",
                        }}
                        activeDot={{
                            r: 9,
                            fill: "#f97316",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TemperatureChart;