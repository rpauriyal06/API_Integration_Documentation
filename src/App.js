import Collaborator from "./components/common/addCollaborator";
import ContentSupported from "./components/pages/ContentSupported";
import IngestionFlow from "./components/pages/IngestionFlow";
import Playback  from "./components/pages/Playback";

function App() {
  return (
      <>
      <Collaborator/>
         <ContentSupported/>
         <IngestionFlow/>
         <Playback/>
         </>
  );
}

export default App;
