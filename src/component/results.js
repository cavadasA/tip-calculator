import { useSelector, useStore } from "react-redux";
import { resetValues } from "../store/actions";

export function Results() {
  const store = useStore();
  const personAmount = useSelector((state) => state.personAmount);
  const tipAmount = useSelector((state) => state.tipAmount);

  function handleReset() {
    store.dispatch(resetValues());
  }
  return (
    <div className="row pl-5 pr-2 mb-5 mt-3 h-100 pb-5 w-100">
      <div
        className="col-sm-12 pt-5"
        style={{ backgroundColor: "#00474b", borderRadius: 1 + "em" }}
      >
        <div className="row">
          <div className="col-sm-6 text-left mt-3 w-50">
            <h3 className="text-white">Tip amount</h3>
            <p className="text-secondary">/ person</p>
          </div>
          <div className="col-sm-6 text-right w-50 mt-3">
            <h3 style={{ color: "#28c1ad", fontSize: 2 + "em" }}>
              ${tipAmount}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-left mt-3 w-50">
            <h3 className="text-white">Total</h3>
            <p className="text-secondary">/ person</p>
          </div>
          <div className="col-sm-6 text-right w-50 mt-3">
            <h3 style={{ color: "#28c1ad", fontSize: 2 + "em" }}>
              ${personAmount !== 0 ? personAmount : 0}
            </h3>
          </div>
        </div>
        <div className="row d-lg-none d-md-none" /*Visible solo en movil*/>
          <div className="col-sm-12">
            <button
              type="button"
              className="btn btn-lg btn-block text-white mb-5"
              style={{ backgroundColor: "#26c2ad", fontSize: 2 + "em" }}
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        </div>
        <div
          className="row d-none d-md-flex h-50" /*Visible solo en pantallas medianas/grandes*/
        >
          <div className="col-sm-12 align-self-end">
            <button
              type="button"
              className="btn btn-lg btn-block text-white"
              style={{ backgroundColor: "#26c2ad", fontSize: 2 + "em" }}
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
