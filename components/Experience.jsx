const timeline = [
  {
    year: "CURRENT",
    title: "Computer Science Teacher",
    place: "Education",
    text: "Teaching Computer Science and helping students develop practical understanding of technology and programming.",
  },
  {
    year: "ONGOING",
    title: "Business Owner",
    place: "Entrepreneurship",
    text: "Building and managing a premium consumer brand while working on product presentation, customer experience and marketing.",
  },
  {
    year: "ONGOING",
    title: "Creative & Technology Projects",
    place: "Development / Design",
    text: "Creating websites, experimenting with game development, producing graphics and developing digital content.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>A journey of <span>continuous growth.</span></h2>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p>{item.place}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}