import PropTypes from 'prop-types';


export function TipButton(props) {
    return (
        <button type="button" className="btn btn-lg btn-block text-white my-2" style={props.selected === true ? {backgroundColor: "#26c2ad", fontSize: 2 + "em"} : {backgroundColor: "#00474b", fontSize: 2 + "em"}}>{props.percentage}%</button>
    )
}

TipButton.propTypes = {
    percentage: PropTypes.number,
    selected: PropTypes.bool
}