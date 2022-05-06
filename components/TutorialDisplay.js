import React from "react";
import Wrapper from "../assets/wrappers/TutorialDisplayWrapper";
import tutorials from "../utils/tutorials";
import { useParams } from "react-router-dom";

const TutorialDisplay = () => {
  let { id } = useParams();
  return (
    <Wrapper>
      {tutorials
        .filter((tutorial) => tutorial.id === id)
        .map((tutorial) => {
          <div key={tutorial.id}>
            <h1>{tutorial.name}</h1>
            <p>{tutorial.desc}</p>
          </div>;
        })}
    </Wrapper>
  );
};

export default TutorialDisplay;
