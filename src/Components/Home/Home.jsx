import Hero from "../Hero/Hero";
import Programs from "../Programs/program";
import Title from "../Title/title";
import About from "../About/about";
import Campus from "../Campus/campus";
import Feedback from "../Feedback/feedback";
import Contact from "../Contact/contact";
import Footer from "../Footer/Footer";
import VideoPlayer from "../VideoPlayer/video";
import { useState } from "react";

const Home = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <div className="container">
        <Title subTitle="OUR INSTITUTE" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title="GALLERY" subTitle="CDM PHOTOS" />
        <Campus />
        <Title subTitle="What Student Says" title="FEED BACK" />
        <Feedback />
        <Title subTitle="Get in Touch" title="Contact US" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default Home;
