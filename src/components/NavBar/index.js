import { useEffect, useState } from "react";
import cities from "../../cities.json"
import "./navbar.css";

const NavBar = () => {
    const [city, setCity] = useState({
        "latitude": 40.730610,
        "longitude": -73.935242,
        "office": "test",
        "gridx": "x",
        "gridy": "y"
    })
    const [cityName, setCityName] = useState('');
    console.log(city)

    //todo- manage api
    // use useContext

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.weather.gov/points/${city.latitude},${city.longitude}`)
            const data = await response.json()
            console.log(data.properties)
            setCityName(data.properties.relativeLocation.properties.city)
        })();

    }, [])


    return (
        <div className="navbar">

            <label className="navbar__label">Popular Cities
                <select onChange={(e) => setCity(cities[e.target.value])} name="popular cities" className="navbar__select">
                    <option value="NewYork">New York</option>
                    <option value="Miami">Miami</option>
                    <option value="LasVegas">Las Vegas</option>
                    <option value="Austin">Austin</option>
                    <option value="Honolulu">Honolulu</option>
                </select>
            </label>

            <label className="navbar__label-newcity">Search New City
                <label className="navbar__label-latitude">Latitude
                    <input type="number" name="latitude" />
                </label>
                <label className="navbar__label-longitude">Longitude
                    <input type="number" name="longitude" />
                </label>
                <button className="navbar__button-submit" type="button">submit</button>
            </label>
        </div>
    )
}

export default NavBar;
