import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin/LocationPin";

const location = {
  address: "401, sheetal varsha mahavir business park, Gujarat 380022",
  lat: 23.00919,
  lng: 72.566948,
};

const Map = () => {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDEuro55lW2YmweMMJavAmAfZoprpLHraQ" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
