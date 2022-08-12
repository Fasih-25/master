import React from 'react';
// import {routes} from 'react';
import img1 from './Galchen-Telescope.jpg';
import img2 from './telescope_alignment_evaluation_image_labeled_1200.jpg';
import { Link } from "react-router-dom";

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
      <div className="container">
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
  )
}

export default Rows
