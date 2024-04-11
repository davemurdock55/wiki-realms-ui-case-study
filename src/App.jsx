// import logo from "./logo.svg";
import "./App.css";
import FutureThoughtsPlans from "./components/FutureThoughtsPlans.tsx";
import GuerillaTesting from "./components/GuerillaTesting.tsx";
import HighFidelityDesignWork from "./components/HighFidelityDesignWork.tsx";
import InitialDesignWork from "./components/InitialDesignWork.tsx";
import Intro from "./components/Intro.tsx";
import JourneyMapTaskFlowFigjam from "./components/JourneyMapTaskFlowFigjam.tsx";
import Persona from "./components/Persona.tsx";
import ProblemStatement from "./components/ProblemStatement.tsx";
import ProjectInsight from "./components/ProjectInsight.tsx";
import TheTeam from "./components/TheTeam.tsx";
import UnderstandingTheProject from "./components/UnderstandingTheProject.tsx";
import UsabilityTesting from "./components/UsabilityTesting.tsx";

function App() {
  return (
    <div className="w-full"> 
      <header className="py-8 bg-fuchsia-100">
        <h1 className="text-4xl font-medium text-center text-fuchsia-500">WikiRealms: A Case Study on Mobile Navigation</h1>
      </header>
      <div className="flex flex-col justify-center my-10 gap-y-10 px-[10%]">
        <Intro />
        <TheTeam />
        <ProjectInsight />
        <ProblemStatement />
        <UnderstandingTheProject />
        <Persona />
        <InitialDesignWork />
        <UsabilityTesting />
        <JourneyMapTaskFlowFigjam />
        <HighFidelityDesignWork />
        <GuerillaTesting />
        <FutureThoughtsPlans />
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="text-blue-500">
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       <iframe
    //         className="border-2 border-blue-500"
    //         width="800"
    //         height="450"
    //         src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlsUK8jvIfAbO9sVPQF0qbj%2FWiki-Realms-Main-Wireframing%3Fpage-id%3D647%253A447%26type%3Ddesign%26node-id%3D932-10281%26viewport%3D-7944%252C1630%252C0.59%26t%3DAuOAP4vCAHVT0VoY-1%26scaling%3Dscale-down%26starting-point-node-id%3D932%253A10281%26mode%3Ddesign"
    //         allowfullscreen
    //       ></iframe>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
