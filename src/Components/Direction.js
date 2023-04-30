import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
const location = {
  lat: 22.941388,
  lng: 90.874521,
};
const Direction = () => {
  const [response, setResponse] = useState(null);
  const directionsCallback = (res) => {
    if (res != null) {
      setResponse(res);
    }
  };
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            width: "100vw",
            height: "100vh",
          }}
          // required
          zoom={14}
          // required
          center={location}
        >
          {this.state.destination !== "" && this.state.origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination: "gulsan",
                origin: "mirpur",
                travelMode: "DRIVING",
              }}
              // required
              callback={directionsCallback}
            />
          )}

          {this.state.response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;
