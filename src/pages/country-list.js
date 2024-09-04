import { useState } from "react";

function CountryItem ({ countryName }) {
    return (
        <li>{countryName}</li>
    )
}

export default function CountryList () {
    const [countries, setCountries] = useState(["nepal", "india"]);
    const [inputCountry, setInputCountry] = useState(null);

    const handleInputNewCountry = (e) => {
        const value = e.target.value /// user le input gareko value esma auxa
        setInputCountry(value);
    };
    const handleAddNewCountry = () => {
        setCountries([...countries, inputCountry]);
    };
    return (
        <div>
            <div>
                <label>
                    Enter country name: 
                    <input onInput={handleInputNewCountry} />
                </label>
                <button onClick={handleAddNewCountry} >add country</button>
            </div>
            <ul>
            {
                countries.map(country => {
                    return <CountryItem countryName={country}/>
                })
            }
            </ul>
        </div>
    );
}