export default function Portfolio() {
  return (
    <div class="portfolio" id="portfolio">
      <h2 class="title2">Portfolio</h2>
      <div class="portfolio-content">
        <section class="project-card">
          <img src="./assets/images/MinimumViablePlaylistScreenshot.png" alt="Screenshot of the minimum viable playlist homepage"/>
          <header>
              <h3>Minimum Viable Playlist</h3>
              <p>A simple and sleek playlist creation app for music enthusiasts who want to create custom playlists</p>
              <a href="https://bradylange1.github.io/Playlist-Creator/">Link to Minimum Viable Playlist</a>
          </header>
        </section>
        <section class="project-card">
          <img src="./assets/images/TabletopCharacterCreatorScreenshot.png" alt="Screenshot of the tabletop character creator homepage"/>
          <header>
            <h3>Tabletop Character Creator</h3>
            <p>An app for character creation. The place to keep all your character ideas and brainstorm new ones.</p>
            <a href="https://tabletop-character-creator-d355a7356b6d.herokuapp.com/">Link to Tabletop Character Creator</a>
          </header>
        </section>
      </div>
    </div>
  );
}
