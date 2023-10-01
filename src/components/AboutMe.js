import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <main style={{ color: "#C3CEDA", marginLeft: "1.6vw" }}>
      <p style={{ marginTop: "2.5vw" }}>
        I am currently a sophomore in Indian Institute of Technology ( Indian
        School of Mines ) Dhanbad , Jharkhand . <br />I am pursuing Integrated
        Master of Technology in Mathematics and Computing . <br /> I was born
        and brought up in Bhopal , Madhya Pradesh .
      </p>
      <div className="cards">
        <h2>Educational Qualifications :</h2>
        <ul>
          <li>Class 10th : 94.6% (CBSE Board)</li>
          <li>Class 12th : 97.8% (CBSE Board)</li>
          <li>
            Integrated Master of Technology in Mathematics and Computing from
            Indian Institute of Technology(Indian School of Mines) , Dhanbad
          </li>
        </ul>
      </div>
      <div className="cards">
        <h2>Technical Skills :</h2>
        <ul>
          <li>Web Development : HTML , CSS , JS , React</li>
          <li>UI/UX : Figma</li>
          <li>Blockchain</li>
          <li>Programming Languages : C++ , JavaScript , Python</li>
        </ul>
      </div>
      <div className="cards">
        <h2>Contact Details :</h2>
        <ul>
          <li>
            <a href="mailto:yash.w.thakur@gmail.com">yash.w.thakur@gmail.com</a>
          </li>
          <li>
            Instagram :{" "}
            <a href="https://www.instagram.com/yash_w_thakur/">
              https://www.instagram.com/yash_w_thakur/
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default AboutMe;
