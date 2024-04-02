import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <iframe
            // style={ { border: "1px", "solid", "rgba(0, 0, 0, 0.1)"} }
            className="border-2 border-red-500"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlsUK8jvIfAbO9sVPQF0qbj%2FWiki-Realms-Main-Wireframing%3Fpage-id%3D647%253A447%26type%3Ddesign%26node-id%3D932-10281%26viewport%3D-7944%252C1630%252C0.59%26t%3DAuOAP4vCAHVT0VoY-1%26scaling%3Dscale-down%26starting-point-node-id%3D932%253A10281%26mode%3Ddesign"
            allowfullscreen
          ></iframe>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
