import "../style/style.css";

const Navigation = () => {
  return (
    <div className="stecky">
      <div className="menu">
      <a href="index.html">
          <img src="home_icon.png" alt="HOME" width="25px" />
        </a>
        <div id="mySidenav" className="navi">

          {/* Tutorials*/}
          <div className="dropdown">
            <a href="#" className="dropbtn">
              {/* <i className="fas fa-book"></i> */}Tutorials 
              <i className="fas fa-caret-down" style={{ marginLeft: '6px' }}></i>
            </a>
            <div className="dropdown-content">
              <a href="#">DSA to Development</a>
              <a href="#">Newly Launched!</a>
              <a href="#">For Working Professionals</a>
              <a href="#">For Students</a>
              <a href="#">Full Stack Development</a>
              <a href="#">All Courses</a>
              <a href="#">Premium</a>
            </div>
          </div>

          {/*Roadmaps */}
          <div className="dropdown">
            <a href="#" className="dropbtn">
              {/* <i className="fas fa-brain"></i> */} Roadmaps
              <i className="fas fa-caret-down" style={{ marginLeft: '6px' }}></i>
            </a>
            <div className="dropdown-content">
              <a href="#">ML Projects</a>
              <a href="#">Python for DS</a>
              <a href="#">AI Roadmap</a>
            </div>
          </div>

          
          {/* <div className="dropdown">
            <a href="#" className="dropbtn">
              <i className="fas fa-graduation-cap"></i> GATE
              <i className="fas fa-caret-down" style={{ marginLeft: '6px' }}></i>
            </a>
            <div className="dropdown-content">
              <a href="#">CSE Syllabus</a>
              <a href="#">GATE Notes</a>
              <a href="#">Mock Tests</a>
            </div>
          </div> */}

          {/* Practice */}
          <div className="dropdown">
            <a href="#" className="dropbtn">
                {/* <i className="fas fa-pencil-alt"></i>  */}Practice 
              <i className="fas fa-caret-down" style={{ marginLeft: '6px' }}></i>
            </a>
            <div className="dropdown-content">
              <a href="#">DSA Questions</a>
              <a href="#">Daily Challenges</a>
              <a href="#">Contests</a>
            </div>
            
          </div>
          <div><a href="#">Community</a></div>
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
};


const HeaderContent = () => {
  return (
    <div className="mainContent ">
      <div className="backGroundEffect">
        <img src="/io.svg" alt="Logo" />
      </div>

      <div className="picture">
        <div className="inte">
          <h1 className="hellow orange">Code</h1>
          <h1 className="hellow white">सीखेगा</h1>
          <h1 className="hellow green">Bharat</h1>
        </div>
        <div className="greeting">
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
