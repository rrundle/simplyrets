import React from 'react'
import {
  Link
} from "react-router-dom";
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

export const HomePage = () => (
  <div
    style={{
      maxWidth: '70%',
      padding: '1em',
      marginLeft: 'auto',
      marginRight: 'auto',
      background: '#eee',
    }}
  >
    <h1>Side React Take-home Assignment</h1>
    <p>
      Welcome to the Side React take-home assignment. This boilerplate is
      intended to help get you started. It's already setup with the fonts and
      SVG assets you will need to complete your assignment.
    </p>
    <p>
      <em>
        Be sure to read through the INSTRUCTIONS.md content before beginning.
        Good luck!
      </em>
    </p>
    <div>
      <div>Here are the SVG assets you will need.</div>
      <img src={heartFill} className="App-logo" alt="favorite icon" />
      <img src={heartStroke} className="App-logo" alt="unfavorite icon" />
    </div>
    <button>
       <Link to="/homes-list">Enter App</Link>
    </button>
  </div>
)

export default HomePage
