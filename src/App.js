import './App.css';
import { useState } from 'react'
import { TipButton } from './component/button';
import { FaUser } from 'react-icons/fa'

function App() {
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [personAlert, setPersonAlert] = useState(false);
  const [personAmount, setPersonAmount] = useState(0);
  const [selectedButton, setSelectedButton] = useState("");

  function handleTip(percentage) {
    if (persons === "" || persons === 0) {
      setPersonAlert(true)
    } else {
      setPersonAlert(false)
      setSelectedButton(percentage)
      let tipResult = (bill * percentage) / persons;
      setTipAmount(parseFloat(tipResult.toFixed(2)))
      let personResult = (bill / persons) + parseFloat(tipResult.toFixed(2))
      setPersonAmount(parseFloat(personResult.toFixed(2)))
    }
  }

  function handleReset() {
    setBill("")
    setPersons("")
    setTipAmount(0)
    setPersonAmount(0)
    setSelectedButton("")
  }

  return (
    <div className="App h-auto">
      <div className="row">
        <div className="col-sm-6 col-lg-4 offset-sm-3 offset-lg-4 pt-5">
          <h1 className="header">S P L I</h1>
          <h1 className="header">T T E R</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-8 offset-lg-2 mt-5 bg-white" style={{ borderRadius: 3 + 'em ' + 3 + 'em ' + 0 + 'em ' + 0 + 'em' }}>
          <div className="row">
            <h2 className="header text-left mt-5 pl-5">Bill</h2>
            <div className="input-group mb-3 px-5 ">
              <div className="input-group-prepend ">
                <span className="form-control border-0 " style={{ backgroundColor: "#f3f8fb", fontSize: 2 + "em" }}>$</span>
              </div>
              <input type="number" placeholder="0" className="form-control border-0 text-right " value={bill} onChange={event => setBill(event.target.value)}></input>
            </div>
          </div>
          <div className="row">
            <h2 className="header text-left mt-3 pl-5">Select tip %</h2>
          </div>
          <div className="row px-4 mt-2">
            <div className="col-6 pr-0" onClick={() => handleTip(.05)}>
              <TipButton percentage={5} selected={selectedButton === .05 ? true : false}/>
            </div>
            <div className="col-6 pr-0" onClick={() => handleTip(.1)}>
              <TipButton percentage={10} selected={selectedButton === .1 ? true : false}/>
            </div>
          </div>
          <div className="row px-4 mt-2">
            <div className="col-6 pr-0" onClick={() => handleTip(.15)}>
              <TipButton percentage={15} selected={selectedButton === .15 ? true : false}/>
            </div>
            <div className="col-6 pr-0" onClick={() => handleTip(.25)}>
              <TipButton percentage={25} selected={selectedButton === .25 ? true : false}/>
            </div>
          </div>
          <div className="row px-4 mt-2">
            <div className="col-6 pr-0" onClick={() => handleTip(.50)}>
              <TipButton percentage={50} selected={selectedButton === .5 ? true : false}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 w-50">
              <h2 className="header text-left mt-3 pl-5 text-nowrap">Number of people </h2>
            </div>
            <div className="col-sm-6 w-50 ">
              {personAlert === true ? <h2 className="header d-none d-md-block text-right text-danger mt-3 pr-5 ">Can't be zero</h2> : ""}
            </div>
            <div className="input-group mb-3 px-5 ">
              <div className="input-group-prepend ">
                <span className="form-control border-0 " style={{ backgroundColor: "#f3f8fb", fontSize: 2 + "em" }}><FaUser /></span>
              </div>
              <input type="number" placeholder="0" className="form-control border-0 text-right" value={persons} onChange={event => setPersons(event.target.value)}></input>
            </div>
          </div>
          <div className="row px-5 mb-5 mt-3">
            <div className="col-sm-12" style={{ backgroundColor: "#00474b", borderRadius: 1 + 'em' }}>
              <div className="row">
                <div className="col-sm-6 text-left mt-3 w-50">
                  <h3 className="text-white">Tip amount</h3>
                  <p className="text-secondary">/ person</p>
                </div>
                <div className="col-sm-6 text-right w-50 mt-3">
                  <h3 style={{ color: "#28c1ad", fontSize: 2 + "em" }}>${tipAmount}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 text-left mt-3 w-50">
                  <h3 className="text-white">Total</h3>
                  <p className="text-secondary">/ person</p>
                </div>
                <div className="col-sm-6 text-right w-50 mt-3">
                  <h3 style={{ color: "#28c1ad", fontSize: 2 + "em" }}>${personAmount !== 0 ? personAmount : 0}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <button type="button" className="btn btn-lg btn-block text-white mt-1 mb-3" style={{ backgroundColor: "#26c2ad", fontSize: 2 + "em" }} onClick={() => handleReset()}>Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
