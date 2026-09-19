export default function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <div>
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>
          Have an idea? <span>Let's build it.</span>
        </h2>

        <p className="contact-copy">
          Whether it’s a website, brand, creative campaign, game concept or
          educational project, I’m always interested in meaningful work.
        </p>
      </div>

      <div className="contact-actions">
        <a
          className="btn btn-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chaudharysikandar180@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Me
        </a>

        <a
          className="contact-link"
          href="https://github.com/Sikandar-673/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

      </div>
    </section>
  );
}