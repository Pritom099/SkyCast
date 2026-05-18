

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10 md:px-20">

                {/* Logo + Description */}
                <aside>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                            SC
                        </div>
                        <span className="text-xl font-bold">SkyCast</span>
                    </div>
                    <p className="mt-2 text-sm">
                        Real-time weather insights at your fingertips.<br />
                        Powered by modern APIs.
                    </p>
                </aside>

                {/* Navigation */}
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Forecast</a>
                    <a className="link link-hover">Countries</a>
                    <a className="link link-hover">About</a>
                </nav>

                {/* API Credits */}
                <nav>
                    <h6 className="footer-title">API Credits</h6>
                    <a
                        href="https://openweathermap.org/weathermap"
                        target="_blank"
                        className="link link-hover"
                    >
                        OpenWeatherMap
                    </a>
                    <a
                        href="https://restcountries.com/"
                        target="_blank"
                        className="link link-hover"
                    >
                        REST Countries
                    </a>
                </nav>

                {/* Developer */}
                <nav>
                    <h6 className="footer-title">Developer</h6>
                    <a
                        href="https://github.com/Pritom099/"
                        target="_blank"
                        className="link link-hover"
                    >
                        GitHub
                    </a>
                    <a className="link link-hover">Portfolio</a>
                </nav>
            </footer>

            {/* Bottom copyright */}
            <footer className="footer bg-base-200 text-base-content border-t px-10 md:px-20 py-4">
                <aside className="w-full text-center">
                    <p>
                        © {new Date().getFullYear()} SkyCast — All rights reserved
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;