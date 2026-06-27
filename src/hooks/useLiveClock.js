import { useEffect, useState } from "react";

export default function useLiveClock(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 1000 * 30);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

function formatTime(timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}
