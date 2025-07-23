import classes from "../TimeLine/TimeLine.module.css";
import catImage from "../../assets/cat.jpg";
import iisi_1 from "../../assets/iisi_1.jpg";
import iisi_2 from "../../assets/iisi_2.jpg";
import nanshan from "../../assets/nanshan.jpg";
import eva from "../../assets/eva2.jpg";
import shakespear from "../../assets/shakespear.jpg";
import highschool from "../../assets/highschool.png";
import java1 from "../../assets/java_class_1.jpg";
import java2 from "../../assets/java_class_2.jpg";
import * as React from "react";

const TimeLine = () => {
  return (
    <div id="timeline" className={classes.container}>
      <div className={classes.subject}>EXPERIENCES</div>
      <ul className={classes.timeLine_ul}>
        {/* <li style={{ "--accent-color": "#3cb371" }}>
          <div className={classes.date}>2011/9~2014/6</div>
          <div className={classes.title}>
            <b>台中女中</b>
            <br />
          </div>
          <div className={classes.descr}>
            高中為台中女中畢業
            <br />
            對自己的評價就是<b>努力型人格</b>
            <br />
            指考時被幸運女神眷顧，考太好了
            <br />
            以至於誤打誤撞讀了自己好沒興趣的外文系TT
          </div>
          <img
            className={classes.susan_img}
            src={highschool}
            alt={"highschool"}
          />
        </li> */}
        <li style={{ "--accent-color": "#FF8040" }}>
          <div className={classes.date}>2018/6~2014/9</div>
          <div className={classes.title}>
            <b>
              Department of Foreign Languages and Literatures, National Taiwan
              University
            </b>
            <br />
          </div>
          <div className={classes.descr}>
            During college, I spent every day reading Shakespeare, the Bible,
            and Western classics. <br />
            <img
              className={classes.susan_img}
              src={shakespear}
              alt={"shakespear"}
            />
            <br />
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className={classes.date}>2018/8~2020/2</div>
          <div className={classes.title}>
            <b>The beginning of my career</b>
            <br />
          </div>
          <div className={classes.title}>
            <b>EVA Air – Ticketing Specialist</b>
            <br />
          </div>
          <div className={classes.descr}>
            <div>
              In my first year on the job,
              <b>
                I got caught in the middle of the massive EVA Air flight
                attendant strike
              </b>
              — and was scolded by frustrated travelers from all over the world!
              <br />
              <br />
              But it also taught me how to communicate in a gentle and effective
              way — one that can truly calm and comfort others. <br />
            </div>
          </div>
          <img className={classes.susan_img} src={eva} alt={"eva"} />
        </li>
        <li style={{ "--accent-color": "#FF5733" }}>
          <div className={classes.date}>2020/6~2021/3</div>
          <div className={classes.title}>
            <b>My first encounter with computer science</b>
            <br />
          </div>
          <div className={classes.title}>
            <b>Nan Shan Life Insurance – Policyholder Service Representative</b>
            <br />
          </div>
          <div className={classes.descr}>
            The pandemic made me start thinking about a career change.
            <br />
            <br />I joined <b>Nan Shan Life Insurance</b>, where I was
            responsible for contract modification services.
            <br />
            <br />
            Coincidentally, the company was implementing a new ERP system at the
            time, which caused major disruptions in our business processes.{" "}
            <br />
            <br /> However, because I often had to report issues to the
            engineers, I gradually became exposed to the world of software
            development.
          </div>
          <img className={classes.susan_img} src={nanshan} alt={"nanshan"} />
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className={classes.date}>2021/6~2022/11</div>
          <div className={classes.title}>
            <b>Java Career Transition Program at NTUT</b>
            <br />
          </div>
          <div className={classes.descr}>
            Later on, by a stroke of luck,
            <br />
            I came across information about a full-stack career transition
            program. <br />
            <br />
            I spent six months studying in the program, learning full-stack
            development skills, <br />
            and successfully transitioned into a full-stack engineer role at
            IISI software{" "}
            <img className={classes.susan_img} src={java1} alt={"java1"} />
            <br />
            <img className={classes.susan_img} src={java2} alt={"java2"} />
          </div>
        </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className={classes.date}>2023/1~2024/8</div>
          <div className={classes.title}>
            <b>full-stack engineer</b>
            <br />
          </div>
          <div className={classes.descr}>
            <div>
              <b>IISI</b>
              <br />
              <br />
            </div>
            <div>
              <b>
                Project 1 – Smart Tax Platform, Ministry of Finance
                (2022/01-2024/08):
              </b>
              <br />
            </div>
            <div>
              <b>Technologies Used:</b>
              <br />
            </div>
            Vue2 + Composition API、BootstrapVue、Spring Boot、Azure
            <br />
            <br />
            <div>
              <b>Project Description: </b>
              <br />
              The system enables tax officers to define investigation scopes via
              a web interface. The backend then performs data reconciliation and
              cross-referencing to retrieve related information. Through
              scheduled batch processing, it identifies companies that may pose
              potential tax risks and flags them for further review and risk
              management. <br />
              <br />
            </div>
            <div>
              <b>Responsibilities / My Role:</b>
              <br />
            </div>
            1. Developed both frontend and backend code, implementing
            communication between the two via RESTful APIs.
            <br />
            <br />
            2. Utilized <b>cytoscape.js</b> to visualize upstream and downstream
            supply chain relationships of domestic and international companies
            in Taiwan, presenting the data graphically on the Ministry of
            Finance's internal web platform.
            <br />
            <div className={"usp-wrapper usp-wrapper-r"}>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className={"button w-button usp-item"}
                href={"https://js.cytoscape.org/"}
              >
                cytoscape.js
              </a>
            </div>
            3. Embedded <b>tableau</b> into the Ministry of Finance’s internal
            web portal and resolved cross-origin (CORS) issues between different
            systems.
            <br />
            <div className={"usp-wrapper usp-wrapper-r"}>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className={"button w-button usp-item"}
                href={"https://www.tableau.com/zh-tw"}
              >
                tableau
              </a>
            </div>
            4. Utilized <b>ireport、POI</b> in the backend to generate
            customized reports in PDF and Excel formats for printing and
            internal use by the Ministry of Finance.
            <br />
            <br />
            5. Performed routine vulnerability scans and fixed security issues
            in the source code.
            <br />
            <br />
          </div>
          <img className={classes.susan_img} src={iisi_1} alt={"iisi_1"} />
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className={classes.date}>2023/1~2024/8</div>
          <div className={classes.title}>
            <b>full-stack engineer</b>
            <br />
          </div>
          <div className={classes.descr}>
            <div>
              <b>IISI</b>
              <br />
              <br />
            </div>
            <b>
              Project 2 – Address Query System, Ministry of the Interior
              (2023/11~2024/05):
            </b>{" "}
            <br />
            <br />
            <div>
              <b>Technologies Used:</b>
              <br />
            </div>
            Spring Boot、Spring security 、redis、pentaho <br />
            <br />
            <div>
              <b>Project Description:</b>
              <br />
            </div>
            The system handles incomplete address inputs by performing backend
            matching and reconstruction, returning a full and standardized
            address for user confirmation.
            <br />
            <br />
            <div>
              <b>Responsibilities / My Role:</b>
              <br />
            </div>
            1. Extracted address records from the Vertica database and migrated
            them to Redis to improve query performance and enable real-time
            address matching. <br />
            <br />
            2.complete the login system, implementing authentication and
            encryption using JWT tokens. <br />
            <br />
            3. Designed the backend workflow for the address-matching service.
          </div>
          <img className={classes.susan_img} src={iisi_2} alt={"iisi_2"} />
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className={classes.date}>Now</div>
          <div className={classes.title}>
            <b>
              After working as a full-stack web developer for nearly three
              years, <br />
              I began to reflect on whether there is still room for me to grow
              in the field of computer science.
              <br />
              I truly love this career and find great fulfillment in what I do.
              <br />
              I sincerely hope to have the opportunity to join your lab, learn
              alongside others, and grow together.
              <br />
              I'm excited to meet the lab members, and I deeply appreciate your
              time in reading this letter.
              <br />
              Thank you so much! — Huang-Hsi
              <br />
            </b>
          </div>
          <img className={classes.susan_img} src={catImage} alt={"cat"} />
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;
