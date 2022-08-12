import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Router, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Routes, Route, Link } from "react-router-dom";
import img1 from './Galchen-Telescope.jpg';
import img2 from './telescope_alignment_evaluation_image_labeled_1200.jpg';
// import Rows from "./Rows";
import Apps from "./components/Apps";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    // <div className="dashboard">
    //   <div className="dashboard__container">
    //     Logged in asdashboard
    //     <div>{name}</div>
    //     <div>{user?.email}</div>
    //     <button className="dashboard__btn" onClick={logout}>
    //       Logout
    //     </button>
    //   </div>
    // </div>
 <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Authenication App</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard/appss">Text Utils</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <span ><b>Login as: </b>&nbsp;</span>
      <div>{name} &nbsp;</div>
      <div>  {user?.email} &nbsp;</div>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button>
      </div>      
    </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rows" element={<Rows />} />
    <Route path="/columns" element={<Columns />} />
    <Route path="/appss" element={<Appss />} />
  </Routes>
</>
  );
}
 
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>I'm a Home Page</p>
      </main>
      <nav>
        {/* <Link to="/rows">Rows</Link>
        <Link to="/columns">Columns</Link> */}
      </nav>
      <div className="row">
        <div className="col">
            <div className="row">
              <div className="b1 box col" > Click Here To visit Row Page
              <Link to="/dashboard/rows">
                <button className="button button2">Row</button>
                </Link>
              </div>
              <div className="b2 box col">Click Here To Visit Column Page
                <Link to="/dashboard/columns">
                <button className="button button2">Column</button>
                </Link>
              </div>
              {/* <div className="b3 box col-lg-2 col-md-2 .col-sm-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci explicabo voluptatem iure voluptatibus, quidem minima ab recusandae inventore nesciunt nam nemo itaque, ducimus fugit perferendis labore. Dolore fuga minus magnam ipsam temporibus mollitia minima!
                  <button className="button button3">Click Here</button>
              </div>
              <div className="b4 box col-lg-4 col-md-4 .col-sm-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam, maxime atque architecto eos officia tempora quod recusandae. Repellat repudiandae dicta fuga accusamus aut deleniti et illum odit consectetur saepe a quae voluptates, sapiente magni voluptatem asperiores qui. Minima nobis magnam maxime dicta rem dolores reprehenderit porro. Temporibus doloribus voluptatum deserunt laudantium necessitatibus? Error, accusantium soluta laudantium, porro modi quis dolores debitis maxime commodi, dolorum vel et quam vero? Possimus, sapiente! Soluta blanditiis vel optio illo tenetur rem minus at.
                  <button className="button button4">Click Here</button>
              </div> */}
            </div>  
        </div>
      </div>
    </>
  );
}
function Appss() {
  return (
   <>
   <Apps />
   </>
  );
}

function Rows() {
  return (
    <>
      <main>
      <h4>Content Displayed here In Rows</h4>
        <p>
         I'm a Rows Page
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="container1">
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageRow">
          <img src={img2} alt="" className="image" />
        </div>
      </div>
    </>
  );
}

function Columns() {
  return (
    <>
      <main>
        <h4>Content Displayed here In Columns</h4>
        <p>
         I'm a Columns Page
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="container1">
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img1} alt="" className="image" />
        </div>
        <div className=" imageColumn">
          <img src={img2} alt="" className="image" />
        </div>
      </div>
      </>
  );
}

export default Dashboard;
