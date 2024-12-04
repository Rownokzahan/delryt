const servingLocationsInKolkata = [
  "Baliaghata",
  "Bally Gunge",
  "Behala MG Road",
  "Chinar Park",
  "Garia Station Road",
  "Jodhpur Park",
  "Madhyamgram",
  "New Town",
  "Ruby FC",
  "Salkia Howrah",
  "Salt Lake",
];

const deliverableCities = [
  "Mumbai",
  "New Delhi",
  "Chennai",
  "Bengaluru",
  "Vadodara",
  "Pondicherry",
  "Pune",
  "Nashik",
  "Hyderabad",
  "Kolkata",
  "Kochi",
  "Tiruppur",
  "Indore",
  "Mysore",
  "Jamshedpur",
  "Ghaziabad",
  "Ranchi",
  "Visakhapatnam",
  "Ludhiana",
  "Mohali",
  "Zirakpur",
  "Chandigarh",
  "Mangalore",
  "Jodhpur",
  "Rohtak",
  "Guwahati",
  "Vijayawada",
  "Gurgaon",
  "Margao",
  "Salem",
  "Tirunelveli",
  "Udaipur",
  "Lucknow",
  "Kanpur",
  "Bareilly",
  "Surat",
  "Kollam",
  "Gwalior",
  "Bhopal",
  "Ahmedabad",
  "Vellore",
  "Jabalpur",
  "Tirupati",
  "Meerut",
  "Aligarh",
  "Anand",
  "Jaipur",
  "Palakkad",
  "Agra",
  "Madurai",
  "Raipur",
  "Thrissur",
  "Jalandhar",
  "Noida",
  "Patiala",
  "Faridabad",
  "Nagpur",
  "Amritsar",
  "Hubli",
  "Thiruvananthapuram",
  "Guntur",
  "Bilaspur",
  "Prayagraj",
  "Bhilai",
  "Aurangabad",
  "Banaras",
  "Nellore",
  "Belgaum",
  "Davanagere",
  "Dehradun",
  "Patna",
  "Coimbatore",
  "Bhubaneswar",
  "Panji",
  "Tiruchirappalli",
  "Kota",
  "Panchkula",
  "Jammu",
  "Moradabad",
];

const ServingLocations = () => {
  return (
    <section
      className="bg-contain bg-right bg-no-repeat"
      style={{
        backgroundImage: `url("https://product-assets.faasos.io/eatsure/production/icon-location.jpg")`,
      }}
    >
      <div className="ui-container py-12">
        <div className="space-y-4">
          <h4 className="text-xl">
            Eatsure - Serving Locations in{" "}
            <span className="font-semibold">Kolkata</span>
          </h4>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 overflow-hidden">
            {servingLocationsInKolkata.map((city) => (
              <li key={city}>
                <a href="" className="inline-block py-2">
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="text-xl font-semibold">Other Cities We Deleiver To</h4>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 overflow-hidden">
            {deliverableCities.map((city) => (
              <li key={city}>
                <a href="" className="inline-block py-2">
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServingLocations;
