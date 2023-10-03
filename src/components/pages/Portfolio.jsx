export default function Portfolio() {
  return (
    <>
      <h1 class="title2">Portfolio</h1>
      <div class="portfolio" id="portfolio">
        <div class="portfolio-content">
          <section class="project-card">
            <img src="./MinimumViablePlaylistScreenshot.png" alt="Screenshot of the minimum viable playlist homepage"/>
            <header>
                <h3>Minimum Viable Playlist</h3>
                <p>A simple and sleek playlist creation app for music enthusiasts who want to create custom playlists</p>
                <a href="https://bradylange1.github.io/Playlist-Creator/">Link to Minimum Viable Playlist</a>
                <a href="https://github.com/BradyLange1/Playlist-Creator">Link to the GitHub Repo</a>
            </header>
          </section>
          <section class="project-card">
            <img src="./Tabletop Character Creator Screenshot.png" alt="Screenshot of the tabletop character creator homepage"/>
            <header>
              <h3>Tabletop Character Creator</h3>
              <p>An app for character creation. The place to keep all your character ideas and brainstorm new ones.</p>
              <a href="https://tabletop-character-creator-d355a7356b6d.herokuapp.com/">Link to Tabletop Character Creator</a>
              <a href="https://github.com/nicholewilburn/Tabletop-Character-Creator">Link to the GitHub Repo</a>
            </header>
          </section>
        </div>
      </div>
    </>
  );
}
