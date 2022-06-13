import "./SevenDayForecast.css";

const SevenDayForecast = () => {

    return (
        <div className="forecast-wrapper">
            <span className="forecast-wrapper__span">4 Day Forecast</span>
            <div className="card-wrapper">
                <div className="card">
                    <span>date</span>
                    <img src="" alt="weather icon" />
                    <span>Sunny</span>
                    <span>10 ℉</span>
                </div>
                <div className="card">
                    <span>date</span>
                    <img src="" alt="weather icon" />
                    <span>Sunny</span>
                    <span>10 ℉</span>
                </div>
                <div className="card">
                    <span>date</span>
                    <img src="" alt="weather icon" />
                    <span>Sunny</span>
                    <span>10 ℉</span>
                </div>
                <div className="card">
                    <span>date</span>
                    <img src="" alt="weather icon" />
                    <span>Sunny</span>
                    <span>10 ℉</span>
                </div>
            </div>
        </div>
    )
}

export default SevenDayForecast;
