import "./navbar.css";

const NavBar = () => {


    return (
        <div className="navbar">

            <label className="navbar__label">Popular Cities
                <select name="popular cities" className="navbar__select">
                    <option value="NewYorkCity">New York</option>
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
