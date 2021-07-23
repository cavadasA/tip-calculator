import PropTypes from 'prop-types';


export function TipButton(props) {
    return (
        <button type="button" class="btn btn-lg btn-block text-white my-2" style={{backgroundColor: "#00474b", fontSize: 2 + "em"}}>{props.percentage}%</button>
    )
}

TipButton.propTypes = {
    percentage: PropTypes.number
}