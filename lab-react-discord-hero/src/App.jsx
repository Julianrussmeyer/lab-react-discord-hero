import "./App.css";
import DiscordLogo from "./assets/discord-logo-white.png";
import MenuIcon from "./assets/menu-icon.png";
import DiscordBackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img alt="Discord Logo" src={DiscordLogo} className="Logo" />
        <img alt="Menu Icon" src={MenuIcon} className="Icon" />
      </div>

      <div className="Content">
        <h1 className="Title">Imagine a Place...</h1>
        <p className="Text">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="Buttons">
          <button className="ButtonMac"> Download for Mac</button>
          <button className="ButtonBrowser">
            {" "}
            Open Discord in your browser
          </button>
        </div>

        <div className="ImageContainer">
          <img
            alt="Discord Background Image"
            src={DiscordBackground}
            className="Image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
