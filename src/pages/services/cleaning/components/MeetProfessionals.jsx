import React from "react";
import ProfessionalsCard from "./ProfessionalsCard";
import styled from "@emotion/styled";
import chris from "../../../../img/chris-hemsworth.jpg";
import liam from "../../../../img/Liam-Hemsworth.jpg";
import henry from "../../../../img/henry-carvill.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 90vw;
  
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;

const data = [
  {
    name: "Chris Hemsworth",
    jobs: 154,
    avatar: chris,
    intro:
      "My name is Chris I have had a lot of experience in cleaning occupied and unoccupied houses in Tampa. I have an excellent job, I am a very kind, affectionate and honest person, I like all animals so it is not a problem when it comes to a service. I am very precise and careful in cleaning."
  },
  {
    name: "Liam Hemsworth",
    jobs: 516,
    avatar: liam,
    intro:
      "My name is Liam I've been home cleaning for as long as I can remember. Cleaning was a part of life, and now has become a passion, going above and beyond is a thing I like to do, and I do best."
  },
  {
    name: "Henry Cavill",
    jobs: 1213,
    avatar: henry,
    intro:
      "My name is Henry and I have been a housekeeper for 17 years. I have worked with a family from the Spanish Embassy in Washington, DC for 2 years, then I met a nice family that I worked for 11 years as a live in housekeeper. Then I moved to NY and worked as a baby nurse, before I moved to the Bay Area and started working with Handy."
  }
];

const MeetProfessionals = () => {
  return (
    <Container>
      {data.map((person, index) => (
        <ProfessionalsCard details={person} key={`profile${index}`} />
      ))}
    </Container>
  );
};

export default MeetProfessionals;
