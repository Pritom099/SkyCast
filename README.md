 live link - https://weather-of-any-city.netlify.app

 
🌤️ Weather App (Frontend Only)
A modern weather application built with React + Vite that fetches real-time weather data using the OpenWeatherMap API.

🚀 Features:
🔍 Search weather by city name
🌡️ Real-time temperature and weather conditions
📊 Temperature chart visualization
📅 Forecast preview (next few days)
🧾 Weather history (saved searches)
🗑️ Delete history with confirmation alert
🎨 Clean and responsive UI

🛠️ Tech Stack:
React (Vite)
Tailwind CSS
OpenWeatherMap API
React Icons

📁 Project Structure:

src/
│
├── assets/            # Images and static files
├── Components/        # Reusable components
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TemperatureChart.jsx
│   ├── PredictCard.jsx
│   └── ErrorPage.jsx
│
├── Layouts/
│   └── MainLayout.jsx
│
├── Pages/
│   └── Home.jsx
│
├── Routes/
│   └── Routes.jsx
│
├── App.jsx
├── main.jsx
└── App.css


⚙️ Setup Instructions:

1️⃣ Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app
2️⃣ Install dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env file in the root directory:

VITE_WEATHER_API_KEY=your_openweathermap_api_key

👉 Get your API key from: https://openweathermap.org/api

4️⃣ Run the project
npm run dev
