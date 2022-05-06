import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Java from "./tutorials/Java";
import Html from "./tutorials/Html";
import tutorials from "../../utils/tutorials";
import Wrapper from "../../assets/wrappers/Tutorials";
import { useParams } from "react-router-dom";

const Tutorials = ({ name, desc, img, path }) => {
  // let params = useParams();
  let navigate = useNavigate();
  // function handleClick() {
  //   navigate("java");
  // }

  return (
    <Wrapper>
      {tutorials.map((tutorial) => (
        <div className="card" key={tutorial.id}>
          <div className="card-body">
            <img src={tutorial.img} className="card-img" />
            <h2 className="card-title">{tutorial.name}</h2>
            <p className="card-desc">{tutorial.desc}</p>
          </div>
          <Link className="btn" to={`${tutorial.id}`}>
            Check it out!
          </Link>
        </div>
      ))}
      <Outlet />
    </Wrapper>
  );
};

export default Tutorials;
