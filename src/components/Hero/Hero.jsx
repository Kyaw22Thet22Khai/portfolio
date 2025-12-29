import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Styles (SCSS)
import "./hero.scss";

// Used Images
import introIllustration from "../../assets/intro-section-illustration.png";
import AnimateSection from "../AnimateSection";

export default function Hero() {
  return (
    <AnimateSection as="section" id="hero" className="intro-section">
      <div className="row align-items-center">
        <div className="col-md-8 intros text-start">
          <h1 className="display-2">
            <span className="display-2--intro">Hey! I'm Kyaw Thet Khaing</span>
            <span className="display-2--description lh-base">
              this is a multi-purpose responsive layout created using React and
              custom CSS.
            </span>
          </h1>
          <a href="#contact" className="rounded-pill btn-rounded">
            Get in Touch
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="col-md-4 intros text-end">
          <div className="video-box">
            <img
              src={introIllustration}
              alt="video illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </AnimateSection>
  );
}
