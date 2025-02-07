import { useEffect, useRef, useState } from "react";

const TIME_LIMIT = (1 * 60 * 1000) / 10; // 1분

const useInactivity = () => {
  const [isActive, setIsActive] = useState(true);
  const [remainingTime, setRemainingTime] = useState(TIME_LIMIT);
  // const remainingTimeRef = useRef(TIME_LIMIT);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setRemainingTime(TIME_LIMIT);

    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, TIME_LIMIT);

    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);
  };

  const stopInactivityTracking = () => {
    window.removeEventListener("click", resetTimer);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsActive(false);
    setRemainingTime(TIME_LIMIT);
  };

  useEffect(() => {
    resetTimer();

    window.addEventListener("click", resetTimer);

    return () => {
      window.removeEventListener("click", resetTimer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return [isActive, setIsActive, remainingTime, stopInactivityTracking];
};

export default useInactivity;
