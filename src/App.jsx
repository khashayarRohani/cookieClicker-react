import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import LevelButtons from "./components/LevelButtons";
import Footer from "./components/Footer";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [level, setLevel] = useState(0);
  const [userName, setUserName] = useState("");
  const [cookieSrc, setCookieSrc] = useState(
    "../src/Images/Cookies/first.webp"
  );
  function GetUserName() {
    //for reset button
    let name = prompt("What Is Your Name?");
    if (name) setUserName(name);
    else setUserName("Guest");
  }

  const getUserName = () => {
    //for using inside useEffect
    let name = prompt("What Is Your Name?");
    if (name) setUserName(name);
    else setUserName("Guest");
  };

  useEffect(getUserName, []);

  const levels = [
    { id: 0, name: "L0", cost: 0, increase: 0, src: "" },
    {
      id: 1,
      name: "L1",
      cost: 10,
      increase: 1,
      src: "../src/Images/Levels/1.png",
    },
    {
      id: 2,
      name: "L2",
      cost: 20,
      increase: 5,
      src: "../src/Images/Levels/2.png",
    },
    {
      id: 3,
      name: "L3",
      cost: 45,
      increase: 7,
      src: "../src/Images/Levels/3.png",
    },
    {
      id: 4,
      name: "L4",
      cost: 100,
      increase: 12,
      src: "../src/Images/Levels/4.png",
    },
    {
      id: 5,
      name: "L5",
      cost: 800,
      increase: 20,
      src: "../src/Images/Levels/5.png",
    },
  ];
  useEffect(() => {
    const levelInterveal = setInterval(() => {
      setCookies((curr) => curr + levels[level].increase);
    }, 1000);
    return () => clearInterval(levelInterveal);
  }, [level]);

  function tapFarming() {
    setCookies(cookies + 1);
  }

  function buyLevel(levelId) {
    const selectedLevel = levels.find((level) => level.id === levelId); // level is a variable which stands for items in levels
    if (cookies >= selectedLevel.cost) {
      setLevel(levelId); // Update to the specific level clicked
      setCookies(cookies - selectedLevel.cost);
    } else {
      alert("Not enough cookies to buy this level.");
    }
  }
  const resetGame = () => {
    setCookies(0);
    setLevel(0);
    setCookieSrc("../src/Images/Cookies/first.webp");
    GetUserName();
  };

  return (
    <section className="fullSection">
      <Header
        setCookieSrc={setCookieSrc}
        cookies={cookies}
        setCookies={setCookies}
        username={userName}
      />
      <FirstSection
        cookies={cookies}
        tapCookie={tapFarming}
        cookieSrc={cookieSrc}
        currentLevel={level}
        lev={levels}
      />
      <LevelButtons
        currentLevel={level}
        cookies={cookies}
        buyLevel={buyLevel}
        lev={levels}
      />
      <Footer onReset={resetGame} />
    </section>
  );
}
