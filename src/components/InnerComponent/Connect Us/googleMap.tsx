/// <reference types="@types/google.maps" />
import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCHZv7g1usdHQy-yCnp1WCBCZHi_TWLWeI`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          initMap();
        };
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (mapRef.current && window.google) {
        const location = { lat: 28.633750, lng: 77.091682 };
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#242f3e" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#242f3e" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#746855" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{ "color": "#38414e" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [{ "color": "#212a37" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9ca5b3" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{ "color": "#17263c" }]
            }
          ]
        });

        new google.maps.Marker({
          position: location,
          map: map,
          title: "Axen Studios"
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
            Find Us Here
          </span>
        </h2>
        <div className="w-full h-[500px] rounded-xl overflow-hidden">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
