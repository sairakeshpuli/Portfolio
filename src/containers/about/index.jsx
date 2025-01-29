import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Sai Rakesh",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "Hyderabad",
  },
  {
    label: "Email",
    value: "rakesh.puli97@gmail.com",
  },
  {
    label: "Contact No",
    value: "8019497475",
  },
];

const jobSummary =
  "A highly skilled and self-driven Front End Developer with 2.5 years of experience in combining design principles with programming expertise to create intuitive, visually appealing, and responsive websites. Dedicated to delivering exceptional user experiences through efficient development practices, proactive optimization, and rigorous debugging. Passionate about UI/UX design and committed to maintaining high standards of aesthetics and usability. Adept at translating design concepts into functional, user-friendly interfaces while adhering to design guidelines and best practices. Known for meticulous attention to detail and a collaborative approach in implementing design ideas to meet and exceed client expectations";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.id || item.label}>
                  <span className="title">{item.label || "No Label"}</span>
                  <span className="value">{item.value || "No Value"}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={40} color="var( --yellow-theme-main-color)" style={{marginTop:'15px'}} />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={40} color="var( --yellow-theme-main-color)" style={{marginBottom:'15px'}}/>
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
