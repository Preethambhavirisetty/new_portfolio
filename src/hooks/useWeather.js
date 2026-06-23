import { useEffect, useState } from "react";

const WEATHER_CODES = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Violent showers",
  95: "Thunderstorm",
};

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchWeather() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const res = await fetch(url);
        const data = await res.json();
        if (cancelled) return;
        const current = data.current_weather;
        setWeather({
          temperature: Math.round(current.temperature),
          description: WEATHER_CODES[current.weathercode] ?? "Clear",
        });
      } catch {
        if (!cancelled) setWeather(null);
      }
    }

    fetchWeather();
    const id = setInterval(fetchWeather, 1000 * 60 * 15);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [latitude, longitude]);

  return weather;
}
