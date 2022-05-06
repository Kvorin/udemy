import React from "react";
import Wrapper from "../assets/wrappers/Landing-style";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h2>
            Join our <span>courses</span> now!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula arcu sed est molestie, euismod volutpat sem placerat.
            Pellentesque sit amet mollis enim.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="main picture" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
