import "./Hero.css";
import arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>
          Our website is designed for students who wish to take the entrance
          exam for our school. Here, you will find all the information you need
          about exam dates, preparation resources, and the application process.
          We aim to provide a seamless experience as you prepare to join our
          academic community.
        </p>
        <button className="btn">
          Register <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
