import "./App.css";
import Intro from "./components/Intro";
import BestGame from "./components/BestGame";
import NavigationBar from "./components/NavigationBar";
import TrendingGame from "./components/TrendingGame";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <TrendingGame />
      </div>

      <div className="best">
        <BestGame />
      </div>

      <div className="contact">
        <Contact />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
