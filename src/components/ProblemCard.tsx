import React, { useEffect, useState } from "react";
import "../style/ProblemCard.css";

const ProblemCard: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60 * 60 + 22 * 60 + 41);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(timeLeft);

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", {
    month: "long",
  })}`;

  return (
    <div className="problem-container">
      <div className="problem-header">
        <div className="left-section">
          <h2>Problem Of The Day</h2>
        </div>
        <div className="timer">
          <div>{hours}</div>
          <span>:</span>
          <div>{minutes}</div>
          <span>:</span>
          <div>{secs}</div>
        </div>
      </div>

      <div className="problem-card">
        <p className="problem-date">{formattedDate}</p>
        <h3 className="problem-title">Floyd Warshall</h3>
        <div className="problem-footer">
          <button className="solve-button">Solve Problem</button>
          <div className="stats"></div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
