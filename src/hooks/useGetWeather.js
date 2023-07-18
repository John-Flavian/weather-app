import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [coords, setCoords] = useState({});

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      setError("Could not fetch weather!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }

      try {
        let deviceLocation = await Location.getCurrentPositionAsync({});
        setLocation(deviceLocation);
        location &&
          setCoords((prev) => ({
            ...prev,
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          }));

        fetchWeatherData();
      } catch (error) {
        setError("Error getting coordinates");
        return;
      }
    })();
  }, []);

  // console.log(coords);
  return [loading, error, weather];
};
