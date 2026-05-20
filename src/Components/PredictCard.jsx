

const PredictCard = () => {
    return (
        <div className="bg-[#f5f5f5] min-h-screen p-5 text-black">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold">Sun</h1>

                    <p className="text-gray-500 text-sm">
                        Banten, Indonesia
                    </p>
                </div>
                <h1 className="text-5xl font-bold text-orange-500">
                    22°C
                </h1>
            </div>

            <div className="mt-10 flex justify-center">
                <div className="relative w-64 h-32">
                    {/* Arc */}
                    <div className="absolute w-full h-full border-t-[3px] border-dashed border-orange-300 rounded-t-full"></div>
                    {/* Sun */}
                    <div className="absolute left-1/2 top-2 -translate-x-1/2 text-orange-400 text-3xl">
                        ☀️
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
                    {/* Card */}
                    <div className="bg-white rounded-3xl p-5 flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl">
                                ☁️
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">
                                    November 10
                                </p>
                                <h1 className="text-xl font-semibold">
                                    Cloudy
                                </h1>
                            </div>
                        </div>
                        <h1 className="text-orange-500 font-bold text-xl">
                            26° / 19°
                        </h1>
                    </div>
                    <div className="bg-white rounded-3xl p-5 flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl">
                                ☁️
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">
                                    November 11
                                </p>
                                <h1 className="text-xl font-semibold">
                                    Cloudy
                                </h1>
                            </div>
                        </div>
                        <h1 className="text-orange-500 font-bold text-xl">
                            24° / 17°
                        </h1>
                    </div>
                </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-2xl mt-8 text-lg font-semibold shadow-lg hover:bg-orange-600 duration-300">
                Next 5 Days
            </button>
        </div>
    );
};

export default PredictCard;