import React, { useContext } from 'react';
import '../CSS/MainStyle.css';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/email';
import {ThemeContext} from '../ThemeProvider';
import profilePic from '../profile.jpg'

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };


  return (
    <div className={`home ${theme}`}>
      <section className="hero">
        <div className="container">
          <h2>Hello, I'm Jarod Jardine</h2>
          <img src={profilePic} alt="Profile" className="profile-picture" />
          <p>Full Stack Developer</p>
        </div>
        <div className="container">
          <p>
            I specialize in MERN (MongoDB, Express, React, Node.js) stack development. Passionate about creative user-friendly, responsive and visually appealing web applications, I am always looking for ways to expand my skills as a web/software developer.
          </p>
        </div>
        
        <div className="social-icons">
          <SocialIcon url="https://www.github.com/JJardine98" />
          <SocialIcon url="https://www.linkedin.com/in/jarod-jardine-40b7b12b3/" />
          <SocialIcon url="mailto:jjardine07@mynbcc.ca" />
        </div>
        <p>Connect With Me</p>

        {/* Theme selector dropdown */}
        <div className="theme-selector">
          <label htmlFor="theme">Choose Theme: </label>
          <select value={theme} onChange={handleThemeChange}>
          <option value="light">Crimson</option>
          <option value="dark">Dark</option>
          {/* Add more themes as needed */}
      </select>
        </div>
      </section>

     

      <section className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <ul>
            <li><a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML5</a></li>
            <li><a href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS3</a></li>
            <li><a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript (ES6+)</a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a></li>
            <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
            <li><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Git & GitHub</a></li>
            <li><a href="https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer">Responsive Design</a></li>
            <li><a href="https://learn.microsoft.com/dotnet/csharp/" target="_blank" rel="noopener noreferrer">C#</a></li>
            <li><a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">SQL</a></li>
            <li><a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
            <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a></li>
          </ul>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Weather Widget</h3>
              <p>A Weather Widget type application that uses 3rd party API to fetch current weather and forecast data for a given city.</p>
              <p>The API also allows the use of Geolocation!</p>
              <a href="/weather" className="project-link">View the Weather Widget</a>
            </div>
            <div className="project-item">
              <h3>Youtube Video Player</h3>
              <p>This Youtube Player uses a combination of React Youtube, React Routes and REGEX to take a user inputted Youtube link and extract the video ID</p>
              <p>It then uses that ID to play the video using the YoutubePlayer component.</p>
              <a href="/video" className="project-link">View the Youtube Video Player</a>
            </div>
            <div className="project-item">
              <h3>Interactive Task List</h3>
              <p>A simple task list that is full stack using MERN. (MongoDB, Express, React, Node.js) It uses 3 out of 4 of the standard CRUD functions (Create, Read & Delete) to add, view and delete tasks.</p>
              <p>It also uses a date dropdown to filter tasks by date.</p>
              <p>The API for the DateDropdown and TaskList are integrated to work together. The DateDropdown uses the API to fetch the dates and the TaskList uses the API to fetch the tasks for the selected date.</p>
              <a href="/task" className="project-link">Interactive Task List</a>
            </div>
            <div className="project-item">
              <h3>Calculator</h3>
              <p>Simple calculator app built with React.</p>
              <a href="/calculator" className="project-link">Calculator</a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;