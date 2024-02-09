import "./styles.css";
import "./styles.scss";
import React, { useState, useRef, Suspense, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CountUp from "react-countup";
import AOS from "aos";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "../node_modules/aos/dist/aos.css";
import { useInView } from "react-hook-inview";
import Tilt from "react-parallax-tilt";
import Parallax, { Layer, AppearLayer } from "react-parallax-scroll";
import Footer from "./Footer";
import Header from "./Header";
import MainDropdown from "./MainDropdown";
import Socials from "./Socials";

AOS.init({
  once: true,
});

const HomeScreen = ({ setScreen, screen }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const Home = () => {
    return (
      <div className="section home">
        <div className="inner">
          <div className="wrap"></div>

          <div className="innerhome">
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <p>Transforming Homes, Elevating Lives</p>
            </div>
            <h2
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              Ready to Start Your Renovation Journey?"
            </h2>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1000"
              data-aos-offset="-100"
              onClick={() => {
                setScreen("forms");
                scroll.scrollToTop();
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="section about" id="about">
        <div key="inner-about" className="inner">
          <div>
            <div className="flex">
              <p
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000"
              >
                Elevate your space with our
                <span className="darkWoodColor">
                  {" modern custom furniture "}
                </span>
                tailored to your unique style
              </p>
              <img
                width="200"
                data-aos="fade"
                data-aos-duration="15000"
                data-aos-delay="000"
                className="chair2"
                src="https://hdbuttercup.com/cdn/shop/products/851532014_1_d16d2245-4c22-43d4-b87c-970f050551cd.png?v=1659484633&width=320"
                alt=""
              />
            </div>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="000"
            >
              We are a team of passionate individuals with a deep appreciation
              for stylish living spaces. Driven by our love for home design,
              we've come together to share our insights and experiences. We're
              committed to guiding others in creating beautiful homes.
            </h1>
            <br></br>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="000"
            >
              At ModBarn Home, we offer an extensive range of services tailored
              to the world of home renovation and interior design. Our goal is
              to provide homeowners their ideal living space, and provide you
              with confidence in selecting trustworthy professionals and
              projects for your home transformation endeavors.
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <Layer settings={{ speed: -0.1, type: "translateX" }}>
              <img
                className="chair"
                alt=""
                src="https://hdbuttercup.com/cdn/shop/products/851532014_1_d16d2245-4c22-43d4-b87c-970f050551cd.png?v=1659484633&width=320"
              />
            </Layer>
          </div>
        </div>
      </div>
    );
  };

  const Services = () => {
    return (
      <div className="section services" id="services">
        <div key="inner-services" className="inner">
          <div>
            <h5
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="00"
            >
              <span className="darkWoodColor">
                Verifying, ranking and rating
              </span>{" "}
              all projects in the web3, crypto and NFT space to enable safer and
              more reliable retail investment experience.
            </h5>
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="00"
            >
              Using a proprietary process and tracing technology in conjunction
              with a powerful legal strategy, we define scams, identify bad
              actors, recover stolen funds and return them safely to the
              community.
            </h5>
          </div>
          <div className="cardsContainer">
            <div className="leftSection">
              <div
                className="container"
                data-aos="fade-down-right"
                data-aos-duration="1500"
                data-aos-delay="00"
              >
                <div className="titleWithIMG">
                  <h2>Project Verification</h2>
                  <h3>
                    Blockchain Unmasked will do an audit of submitted projects
                    to ensure they are legitimate and not scams. Our goal is to
                    provide your community with peace of mind that ensures full
                    legitimacy and integrity of all submitted projects.
                  </h3>
                  <Link
                    activeClass="active"
                    to="verify"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    {/*
                    <button
                      onClick={() => {
                        setScreen("forms");
                        scroll.scrollToTop();
                      }}
                    >
                      Submit a Project
                    </button>
                    */}
                  </Link>
                </div>
                {/*
                <div className="cardBack">
                  <button>Submit a Project</button>
                </div>
                */}
              </div>
              <div
                className="container"
                data-aos="fade-down-left"
                data-aos-duration="1500"
                data-aos-delay="00"
              >
                <div className="titleWithIMG">
                  <h2>Project/Potential Scam Investigation</h2>
                  <h3>
                    A Private Blockchain Investigation Service that identifies
                    scams (known as rugpulls), and malicious intent - as opposed
                    to failed projects. We use a combination of Blockchain
                    Unmasked robust scam verification process and community
                    support.
                  </h3>
                  <Link
                    activeClass="active"
                    to="verify"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    {/*
                    <button
                      onClick={() => {
                        setScreen("forms");
                        scroll.scrollToTop();
                      }}
                    >
                      Submit a Project
                    </button>
                    */}
                  </Link>
                </div>
                {/*
                <div className="cardBack">
                  <button>Submit a Project</button>
                </div>
                */}
              </div>
            </div>
            <div className="rightSection">
              <div
                className="container"
                data-aos="fade-up-right"
                data-aos-duration="1500"
                data-aos-delay="00"
              >
                <div className="titleWithIMG">
                  <h2>Fund Recovery</h2>
                  <h3>
                    Once a project is determined to be an intentional scam, our
                    team will compile a formal legal Complaint with the support
                    of our legal and law enforcement staff. The intention is for
                    the responsible parties to discuss an appropriate deal that
                    reimburses/refunds the community that has been scammed.
                  </h3>
                  <Link
                    activeClass="active"
                    to="verify"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    {/*
                    <button
                      onClick={() => {
                        setScreen("forms");
                        scroll.scrollToTop();
                      }}
                    >
                      Submit a Project
                    </button>
                    */}
                  </Link>
                </div>
                {/*
                <div className="cardBack">
                  <button>Submit a Project</button>
                </div>
                */}
              </div>
              <div
                className="container"
                data-aos="fade-up-left"
                data-aos-duration="1500"
                data-aos-delay="00"
              >
                <div className="titleWithIMG">
                  <h2>Leather Chairs</h2>
                  <h3>Coming soon...</h3>
                </div>
                {/*
                <div className="cardBack">
                  <button>Learn More</button>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Metrics = () => {
    const [ref, isVisible] = useInView({
      threshold: 0,
    });
    const RenderMetrics = () => {
      return (
        <div className="section metrics">
          <div key="inner-metrics" className="inner">
            <div className="container">
              <div className="flex">
                <div
                  className="innerContainer"
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="000"
                >
                  <CountUp
                    start={0}
                    end={15}
                    duration={1.3}
                    separator=" "
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=" YR"
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <h2 ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <h4>Professional Experience</h4>
                </div>
              </div>
              <div className="flex">
                <div
                  className="innerContainer"
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  <CountUp
                    start={0}
                    end={10}
                    duration={1.6}
                    separator=" "
                    decimals={0}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <h2 ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <h4>Projects Completed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div ref={ref}>{isVisible ? <RenderMetrics /> : <RenderMetrics />}</div>
    );
  };

  const Partners = () => {
    return (
      <div className="section partners">
        <div key="inner-partners" className="inner">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="000"
          >
            Our Partners
          </h1>
          <div className="container">
            <div className="row">
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="000"
              >
                <a href="https://www.gb.law/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/h23kXwJ/New-Project-2022-04-11-T185429-532.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                <a href="https://www.peifferwolf.com/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/3YVDjLH/New-Project-2022-04-11-T185456-056.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <a href="https://www.chainalysis.com/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/w0cK4t3/New-Project-2022-04-11-T185433-675.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <a href="https://unicrypt.network/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/sJkwtwt/New-Project-2022-04-11-T185437-681.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <a href="https://darkhorseintel.com/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/1M04P4Y/New-Project-2022-04-11-T185442-707.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                <a href="https://guidepostsolutions.com/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/m6q9QyW/New-Project-2022-04-11-T185446-692.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
              <div
                className="innerContainer"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                <a href="https://tornado.cash/" target="_blank">
                  <img
                    src={
                      "https://i.ibb.co/vXPN9R8/New-Project-2022-04-11-T185450-033.png"
                    }
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Loading = () => {
    if (loading === true) {
      return (
        <div className="loading">
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
        </div>
      );
    } else {
      return (
        <>
          <div className="doneLoadingBG" />
          <div className="doneLoadingLeft" />
          <div className="doneLoadingRight" />
        </>
      );
    }
  };

  return (
    <div className="App">
      <Parallax>
        <div className="mainSocials">
          <Socials />
        </div>
        <Loading />
        <Home />
        <About />
        <Metrics />
        <Services />
        <Partners />
        <Footer />
      </Parallax>
    </div>
  );
};
export default HomeScreen;
