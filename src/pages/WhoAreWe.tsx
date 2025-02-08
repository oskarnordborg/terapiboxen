import React from "react";
import "./WhoAreWe.css";
import GenericCollegue from "../images/generic-collegue.png";

interface Colleague {
  name: string;
  title: string;
  description: string;
  image: string;
}

const colleagues: Colleague[] = [
  {
    name: "Caroline Andersson",
    title: "Medgrundare",
    description: "Medgrundare",
    image: GenericCollegue,
  },
  {
    name: "Stine Johansson",
    title: "Medgrundare",
    description: "Medgrundare",
    image: GenericCollegue,
  },
  {
    name: "Maria Karlsson",
    title: "Medgrundare",
    description: "Medgrundare",
    image: GenericCollegue,
  },
];

const WhoWeAre: React.FC = () => {
  return (
    <section className={"whoWeAre"}>
      <h2>Teamet</h2>
      <div className={"colleagues"}>
        {colleagues.map((colleague, index) => (
          <div className={"colleague"} key={index}>
            <img
              src={colleague.image}
              alt={colleague.name}
              className={"image"}
            />
            <h3>{colleague.name}</h3>
            <h4>{colleague.title}</h4>
            <p>{colleague.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
