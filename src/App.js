import React from "react";
import Classprops from "./Classprops";
import Functionprops from "./Functionprops";


class App extends React.Component {
  render() {
    return (
      <div>
        <Classprops name="learner 1" place="placeA" >
          <p>Child Component</p></Classprops>
        <Classprops name="learner 2" place="placeB" >
          <button>Click</button></Classprops>
        <Classprops name="learner 3" place="placeC" />
        <Functionprops name="learner4" place="placeA" />
      </div>
    );
  }
}
export default App;