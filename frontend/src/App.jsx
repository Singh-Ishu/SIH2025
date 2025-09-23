import Background from "../pages/Background/Background";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Technology from "../pages/Technology/Technology";
import Contact from "../pages/Contact/Contact";
import Navigation from "../components/layout/Navigation/Navigation";
import { useState } from "react";
import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = useState("landing");

    const renderPage = () => {
        switch (currentPage) {
            case "about":
                return <About />;
            case "services":
                return <Services />;
            case "technology":
                return <Technology />;
            case "contact":
                return <Contact />;
            default:
                return <Landing />;
        }
    };

    return (
        <div className="App">
            {currentPage === "landing" ? <Background /> : null}
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
}
export default App;
