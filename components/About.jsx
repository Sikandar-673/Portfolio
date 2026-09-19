export default function About() {
  return (
    <section id="about" className="section section-shell">
      <div className="section-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Different skills. <span>One creative mindset.</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-lead">
          <p>
            I’m Sikandar Tariq, a Computer Science Teacher, Business Owner,
            Game Developer, Graphic Designer and Marketing Manager.
          </p>
          <p>
            My work sits at the intersection of technology and creativity.
            I enjoy teaching people how technology works, creating digital
            products, developing games, designing visual content and helping
            brands communicate better.
          </p>
        </div>

        <div className="about-list">
          <div><span>01</span><b>Education</b><small>Computer Science teaching & learning</small></div>
          <div><span>02</span><b>Technology</b><small>Web development & programming</small></div>
          <div><span>03</span><b>Creativity</b><small>Graphic design & visual content</small></div>
          <div><span>04</span><b>Business</b><small>Brand building & marketing</small></div>
        </div>
      </div>
    </section>
  );
}