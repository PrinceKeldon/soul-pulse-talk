import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const utcNow = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      
      const midnight = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
        0, 0, 0
      );
      
      const difference = midnight - utcNow;
      
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <p className="text-sm text-muted-foreground uppercase tracking-wide">Next Reset In</p>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-heading font-bold text-primary animate-pulse-glow">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-muted-foreground uppercase mt-1">Hours</div>
        </div>
        <div className="text-4xl md:text-5xl font-heading font-bold text-muted-foreground">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-heading font-bold text-primary animate-pulse-glow">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-muted-foreground uppercase mt-1">Minutes</div>
        </div>
        <div className="text-4xl md:text-5xl font-heading font-bold text-muted-foreground">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-heading font-bold text-primary animate-pulse-glow">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-muted-foreground uppercase mt-1">Seconds</div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Until midnight UTC (00:00)</p>
    </div>
  );
};

export default CountdownTimer;
