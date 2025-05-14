// import { useEffect, useState, useTransition } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { getCountryIndData } from "../../API/postApi";
// import Loader from "../UI/Loader";

// export const CountryDetails = () => {
//   const params = useParams();

//   const [isPending, startTransition] = useTransition();
//   const [country, setCountry] = useState();

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryIndData(params.id);
//       console.log(res);
//       if (res.status === 200) {
//         setCountry(res.data[0]);
//       }

//       console.log(Object.keys(res.data[0].name.nativeName));
//     });
//   }, []);

//   if (isPending) return <Loader />;

//   console.log(params);
//   return (
//     <section className="card country-details-card container">
//       <div className="container-card bg-white-box">
//         {country && (
//           <div className="country-image grid grid-two-cols">
//             <img
//               src={country.flags.svg}
//               alt={country.flags.alt}
//               className="flag"
//             />
//             <div className="country-content">
//               <p className="card-title"> {country.name.official} </p>

//               <div className="infoContainer">
//                 <p>
//                   <span className="card-description"> Native Names:</span>
//                   {Object.keys(country.name.nativeName)
//                     .map((key) => country.name.nativeName[key].common)
//                     .join(", ")}
//                 </p>
//                 <p>
//                   <span className="card-description"> Population: </span>
//                   {country.population.toLocaleString()}
//                 </p>
//                 <p>
//                   <span className="card-description"> Region:</span>
//                   {country.region}
//                 </p>
//                 <p>
//                   <span className="card-description"> Sub Region:</span>
//                   {country.subregion}
//                 </p>
//                 <p>
//                   <span className="card-description"> Capital:</span>
//                   {country.capital}
//                 </p>

//                 <p>
//                   <span className="card-description">Top Level Domain:</span>
//                   {country.tld[0]}
//                 </p>
//                 <p>
//                   <span className="card-description"> Currencies: </span>
//                   {Object.keys(country.currencies)
//                     .map((curElem) => country.currencies[curElem].name)
//                     .join(", ")}
//                 </p>
//                 <p>
//                   <span className="card-description">Languages: </span>
//                   {Object.keys(country.languages)
//                     .map((key) => country.languages[key])
//                     .join(", ")}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="country-card-backBtn">
//           <NavLink to="/country" className="backBtn">
//             <button>Go Back</button>
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import Loader from "../UI/Loader";

export const CountryDetails = () => {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(id);
        console.log(res);
        
        if (res?.status === 200 && res.data.length > 0) {
          setCountry(res.data[0]);
        } else {
          setCountry(null); // Handle case where no valid data is received
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        setCountry(null);
      }
    });
  }, [id]);

  if (isPending) return <Loader />;
  if (!country) return <h2 className="text-center">Country details not found.</h2>;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags?.svg || "https://via.placeholder.com/150"}
            alt={country.flags?.alt || "Country flag"}
            className="flag"
          />
          <div className="country-content">
            <p className="card-title">{country.name?.official || "N/A"}</p>

            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names:</span>
                {country.name?.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key]?.common)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Population:</span>
                {country.population?.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="card-description">Region:</span>
                {country.region || "N/A"}
              </p>
              <p>
                <span className="card-description">Sub Region:</span>
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="card-description">Capital:</span>
                {country.capital?.[0] || "N/A"}
              </p>
              <p>
                <span className="card-description">Top Level Domain:</span>
                {country.tld?.[0] || "N/A"}
              </p>
              <p>
                <span className="card-description">Currencies:</span>
                {country.currencies
                  ? Object.keys(country.currencies)
                      .map((curElem) => country.currencies[curElem]?.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Languages:</span>
                {country.languages
                  ? Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
