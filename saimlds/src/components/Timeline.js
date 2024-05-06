import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillChrome } from "react-icons/ai";
const Timeline = () => {
  return (
    <div className="timeline">
      <h1 style={{textAlign:"center",margin:"100px 0 60px 0"}}>Our Events</h1>
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=""
        iconStyle={{ background: "rgba(170, 54, 124)", color: "#fff" }}
        icon={<AiFillChrome />}
      >
        <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714981452/Members%20pics/PXL_20231019_134022244_jio4ue.jpg" alt="Image" className="timeline-img" style={{height:"170px", width:"100%", objectFit:"cover"}}/>
        <h3 className="vertical-timeline-element-title">SkillSprint 1.0 </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
        Lights! Camera! Recap!
Revisiting our journey from Python to Tableau at SKILLSPRINT, an incredible odyssey of learning and growth, where data springs to life in a kaleidoscope of visuals, bridging the realm of code to the art of insight.
        </p>
        <a href={"https://www.instagram.com/p/Cy0etF1yIzG/"}>
          <button className="name" style={{marginLeft:0}}>
              View on Instagram
          </button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=""
        iconStyle={{ background: "rgba(170, 54, 124)", color: "#fff" }}
        icon={<AiFillChrome />}
      >
        <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714981454/Members%20pics/skill2.0_qrunfb.jpg" alt="Image" className="timeline-img" style={{height:"170px", width:"100%", objectFit:"cover"}}/>
        <h3 className="vertical-timeline-element-title">SkillSprint 2.0 </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
        The goal of the event was to provide students with a robust foundation in computer vision and we couldn't be prouder of the progress made!
        </p>
        <a href={"https://www.instagram.com/p/C2hrGXrSqj-/"}>
          <button className="name" style={{marginLeft:0}}>
              View on Instagram
          </button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=""
        iconStyle={{ background: "rgba(170, 54, 124)", color: "#fff" }}
        icon={<AiFillChrome />}
      >
        <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714982212/Members%20pics/Ai_connect9_1_s9pira.jpg" alt="Image" className="timeline-img" style={{height:"170px", width:"100%", objectFit:"cover"}}/>
        <h3 className="vertical-timeline-element-title">AI Connect</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
        Hosted an AI Connect meetup on Feb 1, 2024, at the KIET auditorium with support from the Department of CSE ! The event featured three distinguished guest speakers from the industry and attracted over 300 AI enthusiasts from various departments of the institute.
        </p>
        <a href={"https://www.instagram.com/p/C3HpCKPrTKX/"}>
          <button className="name" style={{marginLeft:0}}>
              View on Instagram
          </button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=""
        iconStyle={{ background: "rgba(170, 54, 124)", color: "#fff" }}
        icon={<AiFillChrome />}
      >
        <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714982114/Members%20pics/mls1_vop5pf.jpg" alt="Image" className="timeline-img" style={{height:"170px", width:"100%", objectFit:"cover"}}/>
        <h3 className="vertical-timeline-element-title">MLS Session 1.0 </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
        Mutual Learning Session on Time Series EDA hosted on April 9, 2024 at KIET Innovation Centre.
        </p>
        <a href={"https://www.instagram.com/p/C5z_9cJS1nF/"}>
          <button className="name" style={{marginLeft:0}}>
              View on Instagram
          </button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=""
        iconStyle={{ background: "rgba(170, 54, 124)", color: "#fff" }}
        icon={<AiFillChrome />}
      >
        <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714981494/Members%20pics/def1_liodyv.jpg" alt="Image" className="timeline-img" style={{height:"170px", width:"100%", objectFit:"cover"}}/>
        <h3 className="vertical-timeline-element-title">DefConnect </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          Coordinated the industrial visit to DefConnect 2k24, which was organized by Innovations for Defence Excellence (iDEX), Defence Innovation Organization (DIO), Ministry of Defence (MoD), Government of India.
        </p>
        <a href={"https://www.instagram.com/p/C4JWL3NyXlz/"}>
          <button className="name" style={{marginLeft:0}}>
              View on Instagram
          </button>
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=""
        iconStyle={{ background: "rgba(170, 54, 124)", color: "#fff" }}
        icon={<AiFillChrome />}
      >
        <img src="https://res.cloudinary.com/db7nmlfln/image/upload/v1714981935/Members%20pics/cll_hljf5x.jpg" alt="Image" className="timeline-img" style={{height:"170px", width:"100%", objectFit:"cover"}}/>
        <h3 className="vertical-timeline-element-title">CII Global Innovation Summit </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
        Confederation of Indian Industry (CII) hosted a Global Innovation & Intellectual Property Summit : ‘Building the synergy among Innovation, IP and Sustainable Development Goals (SDGs) for futuristic growth.
        </p>
        <a href={"https://www.instagram.com/p/C6JdX-OygoV/"}>
          <button className="name" style={{marginLeft:0}}>
              View on Instagram
          </button>
        </a>
      </VerticalTimelineElement>

      
    </VerticalTimeline>
    </div>
  );
};

export default Timeline;
