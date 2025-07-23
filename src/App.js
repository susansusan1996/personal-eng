import * as React from "react";
import SusanImg from "./assets/IMG_0552.png";
import Provide from "./components/Provide/Provide";
import "./App.css";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {
  const onClickHandler = () => {
    window.location.hash = "provide";
  };

  return (
    <div className="App">
      <div className={"page-section radius-large"}>
        <div className={"container-l"}>
          <div className={"intro-text"}>
            <h1>
              <br />
              <br />
              Hello Professor! I'm {"  "}
              <span className={"ff-sans-cond text-accent"}>
                Huang-Hsi Chung (Susan)
              </span>
            </h1>
            <p className={"intro-p an-intro-p"}>
              <h1> Nice to meet you!</h1>
              <br />
              <br />
              After graduating from university, I spent a few years working in
              the airline and insurance industries.
              <br />
              <br />
              It wasn't until I stumbled upon the world of computer science by
              chance that my coding journey truly began! <br />
              After nearly three years of working in software engineering, I’ve
              come to realize just how crucial a strong background in computer
              science is for long-term growth.
              <br />
              <br />
              Therefore, I sincerely hope to have the opportunity to join your
              lab and further improve myself.
              <br />
              <br />
              Thank you sincerely for your time！
              <br />
              <br />
            </p>
            <div className={"usp-wrapper"}>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Java</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>SpringBoot</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Vue.js</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>JavaScript</div>
              </div>

              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>BootStrap</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>AWS</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Azure</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>MsSQL</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>PostgreSQL</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>redis</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Linux</div>
              </div>
              <div className={"usp-item"}>
                <div className={"check-mark text-white"}>✓</div>
                <div>Docker</div>
              </div>
            </div>
          </div>
          <div className={"img-w"}>
            <img className={"susan-img"} src={SusanImg} alt={"susan_img"} />
          </div>
          <div className={"usp-wrapper usp-wrapper-r"}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              className={"button w-button usp-item"}
              href={"https://github.com/susansusan1996"}
            >
              Github
            </a>
          </div>
          <div className={"arrow"} onClick={onClickHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Provide />
      <TimeLine />
    </div>
  );
}

export default App;
