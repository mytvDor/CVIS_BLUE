import React from "react";
import "../home/Steps.css";
const Steps = () => {
  return (
    <div>
      {/* <h1>OL circle cards</h1> */}
      <ol>
        <li className="animate-left">
          <div class="icon">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <div class="title ">Consult</div>
          {/* <div class="descr">Consult</div> */}
        </li>
        <li className="animate-right">
          <div class="icon">
            <i class="fa-solid fa-calendar-alt"></i>
          </div>
          <div class="title">Plan</div>
          {/* <div class="descr">Plan</div> */}
        </li>
        <li className="animate-left">
          <div class="icon">
            <i class="fa-solid fa-palette"></i>
          </div>
          <div class="title">Design</div>
          {/* <div class="descr">Design</div> */}
        </li>
        <li className="animate-right">
          <div class="icon">
            <i class="fa-solid fa-laptop-code"></i>
          </div>
          <div class="title">Develop</div>
          {/* <div class="descr">Develop</div> */}
        </li>
        <li className="animate-left">
          <div class="icon">
            <i class="fa-solid fa-clipboard-check"></i>
          </div>
          <div class="title">Test</div>
          {/* <div class="descr">Test</div> */}
        </li>
        <li className="animate-right">
          <div class="icon">
            <i class="fa-solid fa-rocket"></i>
          </div>
          <div class="title">Deploy</div>
          {/* <div class="descr">Deploy</div> */}
        </li>
      </ol>
    </div>
  );
};

export default Steps;
