import React, { useState, useEffect, useRef } from "react";
import moment from "moment-timezone";

const CounterTime = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef;
  const startTimer = () => {
    const countDownDate = new Date("December 31, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="grid justify-center grid-cols-2 md:grid-cols-4">
      {/* Días */}
      <div className="flex flex-col items-center mr-8">
        <div className="rounded-full bg-transparent border-4 border-white w-24 h-24 flex items-center justify-center mb-2">
          <span className="text-4xl text-white font-bold">
            {timerDays}
            <div className="text-sm text-white text-center">días</div>
          </span>
        </div>
      </div>

      {/* Horas */}
      <div className="flex flex-col items-center mr-8">
        <div className="rounded-full bg-transparent border-4 border-white w-24 h-24 flex items-center justify-center mb-2">
          <span className="text-4xl text-white font-bold">
            {timerHours}
            <div className="text-sm text-white text-center">horas</div>
          </span>
        </div>
      </div>

      {/* Minutos */}
      <div className="flex flex-col items-center mr-8">
        <div className="rounded-full bg-transparent border-4 border-white w-24 h-24 flex items-center justify-center mb-2">
          <span className="text-4xl text-white font-bold">
            {timerMinutes}
            <div className="text-sm text-white text-center">minutos</div>
          </span>
        </div>
      </div>

      {/* Segundos */}
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-transparent border-4 border-white w-24 h-24 flex items-center justify-center mb-2">
          <span className="text-4xl text-white font-bold">
            {timerSeconds}
            <div className="text-sm text-white text-center">segundos</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CounterTime;
