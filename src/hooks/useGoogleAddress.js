import { useState, useEffect } from "react";
import pass from "../pass";

const useGoogleAdress = (address) => {
  const [map, setMap] = useState({ lat: 0, lng: 0 });
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    address
  )}&key=${pass.mapApiKey}`;
  console.log(pass.mapApiKey);
  window.console.log(API);
  useEffect(() => {
    const fetchMap = async () => {
      const result = await fetch(API);
      console.log(result);
      if (!result.ok) throw new Error(Promise.reject(result));
      const json = await result.json();
      console.log(json);
      setMap(json.results[0].geometry.location);
    };
    fetchMap();
  }, [API]);
  window.console.log(map);
  return map;
};
export default useGoogleAdress;
