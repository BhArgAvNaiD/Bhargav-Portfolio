import Header from "./components/Header";
import Navbar from "./components/MainNavbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  return (
    <div className="App font-Poppins">
      <Navbar />
      <Header />
      <TechStack />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
