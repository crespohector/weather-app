import CitySideContext from "./CitySideContext"
import SevenDayForecast from "./SevenDayForecast";
import "./index.css";

const Body = () => {

    //todo- need a breakpoint, if it passes under 725 px then stack it

    return (
        <div className="wrapper">
            <CitySideContext />
            <SevenDayForecast />
        </div>
    )
}

export default Body;
