const projects = [
  {
    number: "01",
    type: "BUSINESS / BRANDING",
    title: "Aura Royale",
    text: "A premium perfume brand focused on luxury identity, product presentation, social media content and digital marketing.",
    tags: ["Branding", "Marketing", "E-Commerce"],
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT",
    title: "Next.js Portfolio",
    text: "A responsive personal portfolio built with the Next.js App Router, reusable React components and modern CSS.",
    tags: ["Next.js", "React", "CSS"],
  },
  {
    number: "03",
    type: "GAME DEVELOPMENT",
    title: "Game Projects",
    text: "Interactive game concepts exploring gameplay, mechanics, visual feedback and programming fundamentals.",
    tags: ["Game Dev", "JavaScript", "Logic"],
  },
  {
    number: "04",
    type: "CREATIVE DESIGN",
    title: "Visual Campaigns",
    text: "Promotional graphics, social media creatives, thumbnails and advertising concepts for digital brands.",
    tags: ["Design", "Social Media", "Ads"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-shell">
      <div className="section-heading row-heading">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects with <span>purpose.</span></h2>
        </div>
        <p className="heading-note">A selection of work across technology, business and creative media.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>
            <div className="project-icon">✦</div>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}