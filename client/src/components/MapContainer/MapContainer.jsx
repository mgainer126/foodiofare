// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: 43.838413,
//   lng: -79.086761,
// };

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   // Outputs to be Rendered
//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle} //Line 4 Demensions of the map window
//       center={center} //Line 9 Location that its being centered on
//       zoom={14} //Amount of zoom
//       onLoad={onLoad} // 22
//       onUnmount={onUnmount} //25
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(Map);
