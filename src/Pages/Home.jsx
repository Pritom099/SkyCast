import Card from "../Components/Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 p-4">

      {/* LEFT SIDE */}
      <div className="md:col-span-2">
        <div className="grid grid-rows-2 gap-5 h-full">

          <div>
            <Card></Card>
          </div>

          <div>
            <div>
                <h1>How</h1>
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