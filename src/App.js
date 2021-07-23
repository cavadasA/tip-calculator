import './App.css';
import { useState } from 'react'
import { TipButton } from './component/button';
import { FaUser } from 'react-icons/fa'

function App() {
  const [bill, setBill] = useState();
  const [persons, setPersons] = useState();

  return (
    <div className="App vh-100">
      <div className="row">
        <div className="col-sm-6 col-lg-4 offset-sm-3 offset-lg-4 pt-5">
          <h1 className="header">S P L I</h1>
          <h1 className="header">T T E R</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-8 offset-lg-2 mt-5 bg-white">
          <div className="row">
            <h2 className="header text-left mt-5 pl-5">Bill</h2>
            <div className="input-group mb-3 px-5 ">
              <div className="input-group-prepend ">
                <span className="form-control border-0 " style={{ backgroundColor: "#f3f8fb", fontSize: 2 + "em" }}>$</span>
              </div>
              <input type="number" className="form-control border-0 text-right " value={bill} onChange={event => setBill(event.target.value)}></input>
            </div>
          </div>
          <div className="row">
            <h2 className="header text-left mt-3 pl-5">Select tip %</h2>
          </div>
          <div className="row px-4 mt-2">
            <div className="col-6 pr-0">
              <TipButton percentage={5} />
            </div>
            <div className="col-6 pr-0">
              <TipButton percentage={10} />
            </div>
          </div>
          <div className="row px-4 mt-2">
            <div className="col-6 pr-0">
              <TipButton percentage={15} />
            </div>
            <div className="col-6 pr-0">
              <TipButton percentage={25} />
            </div>
          </div>
          <div className="row px-4 mt-2">
            <div className="col-6 pr-0">
              <TipButton percentage={50} />
            </div>
          </div>
          <div className="row">
            <h2 className="header text-left mt-3 pl-5">Number of people</h2>
            <div className="input-group mb-3 px-5 ">
              <div className="input-group-prepend ">
                <span className="form-control border-0 " style={{ backgroundColor: "#f3f8fb", fontSize: 2 + "em" }}><FaUser /></span>
              </div>
              <input type="number" className="form-control border-0 text-right " value={persons} onChange={event => setPersons(event.target.value)}></input>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
