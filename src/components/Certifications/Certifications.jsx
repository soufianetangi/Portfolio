import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Certification from "./Certification";
import "./Certifications.css";
import cert1 from "../../assets/alx-program.png";
import cert2 from "../../assets/bits-and-bytes-of-computer-networking.jpeg";
import cert3 from "../../assets/technical-support-fundamentals.jpeg";
import cert4 from "../../assets/hacker-rank-javascript.png";

const certificationsData = [
  {
    img: cert1,
    alt: "ALX Software Engineering Certificate",
    title: "ALX Software Engineering",
    provider: "Alx",
    date: "05 April 2024",
    link: "https://intranet.alxswe.com/certificates/JmHyY2hp6L"
  },
  {
    img: cert2,
    alt: "Networking Certificate",
    title: "Networking",
    provider: "Coursera",
    date: "23 January 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/TH9CQL6UU754"
  },
  {
    img: cert3,
    alt: "Technical Support Fundamentals Certificate",
    title: "Technical Support Fundamentals",
    provider: "Coursera",
    date: "23 January 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/4GA3DKCDAYL7"
  },
  {
    img: cert4,
    alt: "JavaScript (Basic) Certificate",
    title: "JavaScript (Basic)",
    provider: "Hacker Rank",
    date: "10 October 2022",
    link: "https://www.hackerrank.com/certificates/3e46f39c436e"
  }
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <SectionHeader title="Certifications" />
        <div className="certifications-content">
          {certificationsData.map((cert, index) => (
            <Certification
              key={index}
              img={cert.img}
              alt={cert.alt}
              title={cert.title}
              provider={cert.provider}
              date={cert.date}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

