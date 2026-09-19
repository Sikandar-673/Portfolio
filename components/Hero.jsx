import Image from "next/image";
import sikandarImage from "./images/sikandar.png";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Sikandar <span>Tariq</span>
        </h1>

        <h2>Teacher · Entrepreneur · Developer · Designer</h2>

        <p className="hero-description">
          I combine education, technology, creativity and business to build
          useful digital experiences and memorable brands.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Explore My Work
          </a>

          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="quick-stats">
          <div>
            <strong>5+</strong>
            <span>Professional Roles</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Ideas to Build</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>Always Learning</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="profile-card">
          <Image
            src={sikandarImage}
            alt="Sikandar Tariq"
            className="profile-image"
          />

          <p>SIKANDAR TARIQ</p>
          <span>CREATIVE TECHNOLOGIST</span>
        </div>

        <div className="floating-card card-top">
          ⌘ <b>Code</b>
        </div>

        <div className="floating-card card-right">
          ✦ <b>Design</b>
        </div>

        <div className="floating-card card-bottom">
          ◈ <b>Business</b>
        </div>
      </div>
    </section>
  );
}