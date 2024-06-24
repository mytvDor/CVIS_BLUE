import React from "react";
import "./Timeline.css"; // Make sure to link your CSS file here for styling

const Timeline = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
      </header>

      <div className="main-content">
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            To provide professional programs and creative academics through
            high-quality education in engineering and related disciplines.
            Establish mutually beneficial partnerships with industry, alumni,
            local, state, and central governments through public service
            assistance and collaborative research.
          </p>
        </section>

        <section className="section">
          <h2>Our Vision</h2>
          <p>
            For excellent leadership and lifelong success, to establish and
            develop an institute with an expanding horizon of knowledge in the
            field of engineering and technology.
          </p>
        </section>

        <section className="section">
          <h2>Our Core Values</h2>
          <ul>
            <li>Practice what we preach</li>
            <li>Focus on Latest Technology and Skills</li>
            <li>
              Curriculum designed to cater to the latest skills needed for the
              industry.
            </li>
            <li>Experienced Trainers</li>
            <li>
              Certified trainers with a good amount of work experience in the
              industry make Leading Computer training institute.
            </li>
            <li>Problem Solving</li>
            <li>
              We help you build a logical and analytical mindset through case
              study and projects based on real industry scenarios.
            </li>
            <li>Interview Preparation</li>
            <li>
              An interview is the most challenging round of any hiring process.
              Mock interviews by InterviewBuddy give you the platform to
              prepare, practice, and experience firsthand how a real-life job
              interview feels.
            </li>
            <li>Career Oriented Courses</li>
            <li>
              The course includes multiple skills to put the candidate on a fast
              track career with placement support.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
