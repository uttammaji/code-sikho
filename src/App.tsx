import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Article from "./components/Article";
import Me from "./components/me";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <Article />
            <Me />
            <Footer />
        </div>
        
    );
}

export default App;
