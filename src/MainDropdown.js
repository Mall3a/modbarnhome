import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import Socials from "./Socials";

const MainDropdown = ({ setScreen, screen }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="mobileNav">
        <div
          className="inner"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="00"
        >
          <div
            className="logo"
            onClick={() => {
              setScreen("home");
              scroll.scrollToTop();
            }}
          >
            <svg
              width="200px"
              height="200px"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.34 44.4114C31.0805 44.4124 29.873 44.9132 28.9824 45.8038C28.0918 46.6943 27.5911 47.9019 27.59 49.1614V57.7414H37.09V49.1614C37.0889 47.9019 36.5882 46.6943 35.6976 45.8038C34.807 44.9132 33.5994 44.4124 32.34 44.4114Z"
                fill="#000000"
              />
              <path
                d="M52.87 20.6413L36.54 8.39133C35.3261 7.48793 33.8532 7 32.34 7C30.8268 7 29.3539 7.48793 28.14 8.39133L11.81 20.6413C10.9399 21.2933 10.2331 22.1386 9.74548 23.1104C9.25784 24.0822 9.00264 25.154 9 26.2413V50.7413C9.0037 52.5967 9.74238 54.375 11.0543 55.687C12.3663 56.9989 14.1446 57.7376 16 57.7413H23.59V49.1613C23.5908 46.8409 24.5129 44.6158 26.1537 42.975C27.7945 41.3342 30.0196 40.4121 32.34 40.4113C34.6598 40.414 36.8839 41.3367 38.5243 42.9771C40.1646 44.6174 41.0873 46.8415 41.09 49.1613V57.7413H48.67C50.5259 57.7392 52.3051 57.001 53.6174 55.6887C54.9297 54.3764 55.6679 52.5972 55.67 50.7413V26.2413C55.666 25.1553 55.4112 24.0849 54.9256 23.1135C54.4399 22.1422 53.7364 21.2961 52.87 20.6413Z"
                fill="#999999"
              />
            </svg>
            <h1>ModBarn </h1> <h1 className="darkWoodColor">{" Home"}</h1>
          </div>
          <div
            className={`buttonWrapper ${dropdown ? "open" : "closed"}`}
            onClick={() => setDropdown(!dropdown)}
          >
            <div className="hamburger2"></div>
          </div>
        </div>
      </div>
      <div className="mainDropdown">
        {dropdown ? (
          <div className="drop">
            <div className="sidebar">
              <div className="innerSidebar">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button
                    onClick={() => {
                      setDropdown(false);
                      setScreen("home");
                    }}
                  >
                    About Us
                  </button>
                </Link>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button
                    onClick={() => {
                      setDropdown(false);
                      setScreen("home");
                    }}
                  >
                    Services
                  </button>
                </Link>
                <Link
                  activeClass="active"
                  to="verify"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button
                    onClick={() => {
                      setDropdown(false);
                      setScreen("forms");
                    }}
                  >
                    Contact Us{" "}
                  </button>
                </Link>
              </div>
              <Socials />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default MainDropdown;
