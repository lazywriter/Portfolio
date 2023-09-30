import React from "react";

function AboutMe() {
  return (
    <main style={{ color: "#C3CEDA", marginLeft: "1vw" }}>
      <p style={{ marginTop: "30px" }}>
        I am currently a sophomore in Indian Institute of Technology ( Indian
        School of Mines ) Dhanbad , Jharkhand . <br />I am pursuing Integrated
        Master of Technology in Mathematics and Computing . <br /> I was born
        and brought up in Bhopal , Madhya Pradesh .
      </p>
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontWeight: "bold" }}>Educational Qualifications :</h2>
        <ul>
          <li>Class 10th : 94.6% (CBSE Board)</li>
          <li>Class 12th : 97.8% (CBSE Board)</li>
          <li>
            Integrated Master of Technology in Mathematics and Computing from
            Indian Institute of Technology(Indian School of Mines) , Dhanbad
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontWeight: "bold" }}>Technical Skills :</h2>
        <ul>
          <li>Web Development : HTML , CSS , JS , React</li>
          <li>UI/UX : Figma</li>
          <li>Blockchain</li>
          <li>Programming Languages : C++ , JavaScript , Python</li>
        </ul>
      </div>
      <h2 style={{ fontWeight: "bold" }}>Contact Details :</h2>
    </main>
  );
}

export default AboutMe;
