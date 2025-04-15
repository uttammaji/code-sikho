import "../style/style.css";

const Navigation = () => {
  return (
    <div className="stecky">
      <div className="menu">
        <a href="index.html"><img src="home_icon.png" alt="HOME" width="25px" /></a>
        <div id="mySidenav" className="navi">
          <div><a href="#">Tutorials</a></div>
          <div><a href="#">Roadmaps</a></div>
          {/* <div><a href="#">Videos</a></div>
          <div><a href="#">Notes</a></div> */}
          <div><a href="#">Practice </a></div> {/*1) Test 2)problem set   */}
          
          <div><a href="#">Community</a></div>
        </div>
        <input className="search" type="text" name="search" placeholder="Search... " />
      </div>
    </div>
  );
};

const HeaderContent = () => {
  return (
    <div className="first1">
      <div className="daco">
        <img src="/io.svg" alt="Logo" />
      </div>

      <div className="picture">
        <div className="inte">
          <h1 className="hellow orange">Code</h1>
          <h1 className="hellow white">सीखेगा</h1>
          <h1 className="hellow green">Bharat</h1>
        </div>
        <div className="c1">
          <p>Hello 👋 Programmer</p>
          <div className="animation1">
            <div className="first">
              <div>Learn Code</div>
            </div>
            <div className="second">
              <div>Do Practice</div>
            </div>
            <div className="third">
              <div>Have Fun</div>
            </div>
          </div>
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
    </>
  );
};

export default Home;
