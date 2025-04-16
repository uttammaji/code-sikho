// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProblemCard from "./components/ProblemCard";
import Me from "./components/me";
function App() {
  // const [count, setCount] = useState(0)

  return (

   <div className="home-container">
               <Header />
               <Home />
               <ProblemCard />
               <Me />
               <Footer />
               </div>
             
  )
}

export default App
