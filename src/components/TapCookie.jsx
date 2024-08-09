import { useState } from "react";
export default function TapCookie(props) {
  const [scale, setScale] = useState(1);
  // const [clickSound] = useState(new Audio("../src/Audio/eff.mp3")); // Initialize audio once
  const buttonStyle = {
    backgroundImage: `url(${props.cookieSrc})
    
    `,
    backgroundSize: "cover",
    transform: `scale(${scale})`,
    transition: "transform 0.1s ease",
  };

  const handleClick = () => {
    const clickSound = new Audio("/Audio/eff.mp3");
    // Set scale to a larger value
    setScale(1.8);
    clickSound.play();
    // Call the existing click handler
    if (props.TapCookies) {
      props.TapCookies();
    }

    setTimeout(() => {
      setScale(1);
    }, 90);
  };

  return (
    <>
      <button className="cookie" style={buttonStyle} onClick={handleClick}>
        Tap
      </button>
    </>
  );
}
