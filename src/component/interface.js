import { useStore, useSelector } from "react-redux";
import { TipButton } from "./button";
import { FaUser } from "react-icons/fa";
import {
  changeBill,
  changePersons,
  changeSelectedButton,
  setPersonAlert,
  setTipAmount,
  setPersonAmount,
} from "../store/actions";

export function Interface() {
  const store = useStore();
  const bill = useSelector((state) => state.bill);
  const persons = useSelector((state) => state.persons);
  const personAlert = useSelector((state) => state.personAlert);
  const selectedButton = useSelector((state) => state.selectedButton);

  function handleTip(percentage) {
    if (persons === "" || persons === 0) {
      store.dispatch(setPersonAlert(true));
    } else {
      store.dispatch(setPersonAlert(false));
      store.dispatch(changeSelectedButton(percentage));
      let tipResult = (bill * percentage) / persons;
      store.dispatch(setTipAmount(parseFloat(tipResult.toFixed(2))));
      let personResult = bill / persons + parseFloat(tipResult.toFixed(2));
      store.dispatch(setPersonAmount(parseFloat(personResult.toFixed(2))));
    }
  }

  return (
    <div>
      <div className="row">
        <h2 className="header text-left mt-5 pl-5">Bill</h2>
        <div className="input-group mb-3 px-5 ">
          <div className="input-group-prepend ">
            <span
              className="form-control border-0 "
              style={{ backgroundColor: "#f3f8fb", fontSize: 2 + "em" }}
            >
              $
            </span>
          </div>
          <input
            type="number"
            placeholder="0"
            className="form-control border-0 text-right "
            value={bill}
            onChange={(event) =>
              store.dispatch(changeBill(parseInt(event.target.value)))
            }
          ></input>
        </div>
      </div>
      <div className="row">
        <h2 className="header text-left mt-3 pl-5">Select tip %</h2>
      </div>
      <div className="row px-4 mt-2">
        <div className="col-6 pr-0" onClick={() => handleTip(0.05)}>
          <TipButton
            percentage={5}
            selected={selectedButton === 0.05 ? true : false}
          />
        </div>
        <div className="col-6 pr-0" onClick={() => handleTip(0.1)}>
          <TipButton
            percentage={10}
            selected={selectedButton === 0.1 ? true : false}
          />
        </div>
      </div>
      <div className="row px-4 mt-2">
        <div className="col-6 pr-0" onClick={() => handleTip(0.15)}>
          <TipButton
            percentage={15}
            selected={selectedButton === 0.15 ? true : false}
          />
        </div>
        <div className="col-6 pr-0" onClick={() => handleTip(0.25)}>
          <TipButton
            percentage={25}
            selected={selectedButton === 0.25 ? true : false}
          />
        </div>
      </div>
      <div className="row px-4 mt-2">
        <div className="col-6 pr-0" onClick={() => handleTip(0.5)}>
          <TipButton
            percentage={50}
            selected={selectedButton === 0.5 ? true : false}
          />
        </div>
        <div className="col-6 pr-0 mt-2">
          <input
            type="number"
            className="form-control border-0 text-right"
            placeholder="Custom"
            aria-label="custom"
            onChange={(event) => handleTip(event.target.value / 100)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 w-50">
          <h2 className="header text-left mt-3 pl-5 text-nowrap">
            Number of people{" "}
          </h2>
        </div>
        <div className="col-sm-6 w-50 ">
          {personAlert === true ? (
            <h2 className="header d-none d-xl-block text-right text-danger mt-3 pr-5 ">
              Can't be zero
            </h2>
          ) : (
            ""
          )}
        </div>
        <div className="input-group mb-3 px-5 ">
          <div className="input-group-prepend ">
            <span
              className="form-control border-0 "
              style={{ backgroundColor: "#f3f8fb", fontSize: 2 + "em" }}
            >
              <FaUser />
            </span>
          </div>
          <input
            type="number"
            placeholder="0"
            className="form-control border-0 text-right"
            value={persons}
            onChange={(event) =>
              store.dispatch(changePersons(parseInt(event.target.value)))
            }
          ></input>
        </div>
      </div>
    </div>
  );
}
