import "./navbar.css";

const NavBar = () => {


    return (
        <div className="navbar">

            <div className="popular-city">
                <label className="navbar__label">Popular Cities
                    <select name="popular cities" className="navbar__select">
                        <option value="NewYorkCity">New York</option>
                        <option value="Miami">Miami</option>
                        <option value="LasVegas">Las Vegas</option>
                        <option value="Austin">Austin</option>
                        <option value="Honolulu">Honolulu</option>
                    </select>
                </label>
            </div>

            <div className="new-city">
                <label className="navbar__label-newcity">Search New City
                    <label className="navbar__label-latitude">Latitude
                        <input type="number" name="latitude" />
                    </label>
                    <label className="navbar__label-latitude">Longitude
                        <input type="number" name="longitude" />
                    </label>
                    <input className="navbar__input-submit" type="submit" />
                </label>
            </div>
        </div>
    )
}

export default NavBar;
