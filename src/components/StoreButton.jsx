import { useState } from "react";

export default function StoreButton({ cookies, setCookies, setCookieSrc }) {
  const [showStore, setShowStore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const toggleStore = () => {
    setShowStore((prevState) => !prevState);
  };

  const handlePurchase = (cost, newSrc) => {
    if (cookies >= cost) {
      setCookies((prevCookies) => prevCookies - cost);
      setCookieSrc(newSrc); // Update the cookie image src
      setShowStore((prevState) => !prevState);
    } else {
      alert("Not enough cookies!");
    }
  };
  const divStyle = {
    transform: isHovered ? "scale(1.2)" : "scale(1)", // Apply scaling based on hover state
    transition: "transform 0.1s ease", // Smooth scaling transition
  };
  const divStyleTwo = {
    transform: isHoveredTwo ? "scale(1.2)" : "scale(1)", // Apply scaling based on hover state
    transition: "transform 0.1s ease", // Smooth scaling transition
  };
  const divStyleThree = {
    transform: isHoveredThree ? "scale(1.2)" : "scale(1)", // Apply scaling based on hover state
    transition: "transform 0.1s ease", // Smooth scaling transition
  };
  return (
    <>
      <h1 className="kreep">
        <button className="storeButton button" onClick={toggleStore}>
          Store
        </button>
      </h1>

      {showStore && (
        <section className="hidden">
          <h1>Buy Your Cookie</h1>

          <div
            onClick={() =>
              handlePurchase(10, "../../src/Images/Cookies/second.webp")
            }
          >
            <img
              style={divStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              id="selectedImg1"
              src="../../src/Images/Cookies/second.webp"
              alt="Picture 1"
            />
            <p id="Cost1">Cost: 10 cookies</p>
          </div>

          <div
            onClick={() =>
              handlePurchase(20, "../../src/Images/Cookies/third.png")
            }
          >
            <img
              style={divStyleTwo}
              onMouseEnter={() => setIsHoveredTwo(true)}
              onMouseLeave={() => setIsHoveredTwo(false)}
              id="selectedImg2"
              src="../../src/Images/Cookies/third.png"
              alt="Picture 2"
            />
            <p id="Cost2">Cost: 20 cookies</p>
          </div>

          <div
            onClick={() =>
              handlePurchase(0, "../../src/Images/Cookies/first.webp")
            }
          >
            <img
              style={divStyleThree}
              onMouseEnter={() => setIsHoveredThree(true)}
              onMouseLeave={() => setIsHoveredThree(false)}
              id="selectedImg3"
              src="../../src/Images/Cookies/first.webp"
              alt="Picture 3"
            />
            <p>Cost: Free</p>
          </div>
        </section>
      )}
    </>
  );
}
