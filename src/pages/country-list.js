import { useState } from "react";

function CountryItem ({ countryName }) {
    return (
        <li>{countryName}</li>
    )
}

export default function CountryList () {
    const [countries, setCountries] = useState(["nepal", "india"]);
    return (
        <ul>
            {
                countries.map(country => {
                    return <CountryItem countryName={country}/>
                })
            }
        </ul>
    );
}