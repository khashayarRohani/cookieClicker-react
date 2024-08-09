import { useState } from "react";

export default function GuidanceButton() {
  const [showGuide, setShowGuide] = useState(false);

  const toggleGuide = () => {
    setShowGuide((prevState) => !prevState);
  };

  return (
    <div>
      <button className="footerButton" onClick={toggleGuide}>
        {showGuide ? "HideGuide" : "Guide"}
      </button>
      {showGuide && (
        <div className="guide-text">
          <h2>Game Guide</h2>
          <p>
            Welcome to the Cookie Clicker game! Click the cookie to earn cookies
            and use them to buy upgrades. Each level increases your cookie
            production. Keep clicking and upgrading to reach higher levels and
            achieve higher cookie counts!
          </p>
        </div>
      )}
    </div>
  );
}
