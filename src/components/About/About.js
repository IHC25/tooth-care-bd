import React from "react";
import { Card } from "react-bootstrap";
import profile from "../../images/profile.jpg";

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="Container-fluid d-flex align-items-center justify-content-center py-3">
        <Card className="w-50 pb-3">
          <Card.Img variant="top" src={profile} />
          <Card.Body>
            <Card.Title>Dr. Jonathon Adam</Card.Title>
            <Card.Text className="text-start">
              I am Dr. Jonathon Adam and I look forward to addressing all of
              your dental needs. I am passionate about helping patients improve
              their oral health and achieve a beautiful smile. When people ask
              me why I enjoy being a dentist, I explain that I love to build
              personal relationships with my patients and treat the person, not
              just the tooth.
              <br />
              I have been involved in dentistry most of my life. My father was a
              dentist and I always knew I would also become a dentist. After
              attending college at UC Irvine, I attended USC's Herman Ostrow
              School of Dentistry, graduating in 2005. Thereafter, I worked as
              an associate in private practices in cities such as Pasadena,
              Beverly Hills, and Irvine before becoming an associate with Dr.
              Kim in May of 2015.
              <br />
              To the extent you have any questions or concerns, please do not
              hesitate to reach out to me.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
