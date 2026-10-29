
function mainContent() {
  return (
    <main className="main-content">
      <section id="home" className="content-panel hero-panel">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Muhammad Iqbal Fadhilah
          <br />
          Web Developer.
        </h1>

        <p className="hero-description">
          I build responsive websites and web applications
          focused on usability and real-world problems.
        </p>

        <a href="#projects" className="primary-button">
          Explore My Work ↗
        </a>
      </section>

      <section id="projects" className="content-panel">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>Featured Projects</h2>

        <div className="dummy-projects">
          <article className="dummy-project">
            <span>01 / WEB APPLICATION</span>
            <h3>Project One</h3>
            <p>Project description will go here.</p>
          </article>

          <article className="dummy-project">
            <span>02 / WEB APPLICATION</span>
            <h3>Project Two</h3>
            <p>Project description will go here.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default mainContent;
