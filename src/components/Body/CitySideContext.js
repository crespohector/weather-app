import useEffect from "react";

import "./CitySideContext.css";

const CitySideContext = () => {

    //fetch to api

    return (
        <div className="city-wrapper">
            {/* city name
            current day
            icon
            tempature/ tempature unit
            short forecast
            wind speed */}
            <div>
                <span className="city__span-name">city name</span>
                <img className="city__img" src="" alt="weather icon" />
                <span className="city__span-degree">10 ℉</span>
                <span className="city__span-forecast">Sunny</span>
                <span className="city__span-wind-label">Wind speed</span>
                <span className="city__span-wind">5 mphs</span>
            </div>
        </div>
    )
}

export default CitySideContext;
