import { useEffect } from "react";
import "../style/style.css";

function Animation1() {
  const texts = ["Learn Code", "Do Practice", "Have Fun"];
  let index = 0;

  useEffect(() => {
    const textElement = document.getElementById("animated-text");

    function updateText() {
      if (textElement) {
        textElement.textContent = texts[index];
        index = (index + 1) % texts.length;
      }
    }

    // Initial update when the component mounts
    updateText();

    // Set interval to change text every 3 seconds
    const intervalId = setInterval(updateText, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  return null;
}

function Navigation() {
  return (
    <div className="stecky">
      <div className="menu">
        <a href="index.html">
          <img src="home_icon.png" alt="HOME" width="25px" />
        </a>
        <div id="mySidenav" className="navi">
          {/* Navigation code remains unchanged */}
        </div>

        <input
          className="search"
          type="text"
          name="search"
          placeholder="Search... "
        />
      </div>
    </div>
  );
}

const HeaderContent = () => {
  return (
    <div className="mainContent">
      <div className="backGroundEffect">
        <img src="/io.svg" alt="Logo" />
      </div>

      <div className="picture">
        <div className="inte">
          <h1 className="hellow orange">Code</h1>
          <h1 className="hellow white">सीखेगा</h1>
          <h1 className="hellow green">Bharat</h1>
        </div>
         <div className="animation1">
          <h1>Hello 👋 Programmer &nbsp; </h1>
          <h1>
            {/* <span className="static-text">Hello 👋 Programmer </span> */}
            <span className="dynamic-text" id="animated-text"></span>
          </h1>
         </div>
      </div>

      <div className="daco">
        <img src="/io.svg" alt="Logo" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navigation />
      <HeaderContent />
      <Animation1 />
    </>
  );
};

export default Home;
