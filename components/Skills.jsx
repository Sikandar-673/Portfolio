const skills = [
  ["01", "Teaching", "Computer Science, programming, student guidance"],
  ["02", "Web Development", "HTML, CSS, JavaScript, React, Next.js"],
  ["03", "Game Development", "Game concepts, mechanics and interactive experiences"],
  ["04", "Graphic Design", "Branding, social media, posters and advertisements"],
  ["05", "Marketing", "Digital campaigns, content and social media strategy"],
  ["06", "Business", "Brand management, products and customer experience"],
];

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">WHAT I DO</p>
          <h2>Skills that turn <span>ideas into action.</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map(([num, title, text]) => (
            <article className="skill-card" key={num}>
              <span>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}