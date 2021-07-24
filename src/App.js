import "./App.css";
import { Results } from "./component/results";
import { Interface } from "./component/interface";

function App() {
  return (
    <div className="App h-auto py-0 my-0">
      <div className="row">
        <div className="col-sm-6 col-lg-4 offset-sm-3 offset-lg-4 pt-5">
          <h1 className="header">S P L I</h1>
          <h1 className="header">T T E R</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-12 col-lg-8 offset-lg-2 mt-5 bg-white"
          style={{ borderRadius: 3 + "em " + 3 + "em " + 0 + "em " + 0 + "em" }}
        >
          <div className="row d-none d-md-flex ">
            <div className="col-6">
              <Interface />
            </div>
            <div className="col-6 mt-5">
              <Results />
            </div>
          </div>
          <div className="row d-lg-none ">
              <Interface />
              <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
