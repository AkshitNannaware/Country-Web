import React from 'react';
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
    if (!country) return null;

    const { flags, name, population, region, capital } = country;

    return (
        <li className='country-card card'>
            <div className='container-card bg-white-box'>
                <img 
                    src={flags?.svg || "https://via.placeholder.com/150"} 
                    alt={flags?.alt || "Country flag"} 
                    className="w-full h-32 object-cover rounded-t-md"
                />
                <div className='countryInfo p-4'>
                    <p className='card-title font-bold'>
                        {name?.common?.length > 10 ? `${name.common.slice(0, 10)}...` : name.common}
                    </p>
                    <p><span className='card-description font-semibold'>Population:</span> {population?.toLocaleString() || "N/A"}</p>
                    <p><span className='card-description font-semibold'>Region:</span> {region || "N/A"}</p>
                    <p><span className='card-description font-semibold'>Capital:</span> {capital?.[0] || "N/A"}</p>
                    
                    <NavLink to={`/country/${name.common}`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                            Read more
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    );
};

export default CountryCard;
