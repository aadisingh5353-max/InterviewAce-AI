import { useEffect, useState } from "react";

function Timer() {

  const [seconds, setSeconds] =
    useState(120);

  useEffect(() => {

    const interval = setInterval(() => {

      setSeconds((prev) => {

        if (prev === 0) return 0;

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const min = Math.floor(seconds / 60);

  const sec = seconds % 60;

  return (
    <h2
      style={{
        color: "#8B5CF6",
      }}
    >
      ⏱ {min}:
      {sec < 10 ? `0${sec}` : sec}
    </h2>
  );
}

export default Timer;