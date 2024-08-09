import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import LevelButtons from "./components/LevelButtons";
import Footer from "./components/Footer";

export default function App() {
  const [cookies, setCookies] = useState(() => {
    // Retrieve cookies from local storage or default to 0
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? parseInt(savedCookies, 10) : 0; // number 10 is used to tell the compiler it is a decimal number
  });
  const [level, setLevel] = useState(() => {
    // Retrieve level from local storage or default to 0
    const savedLevel = localStorage.getItem("level");
    return savedLevel ? parseInt(savedLevel, 10) : 0;
  });

  const [userName, setUserName] = useState(() => {
    const savedUserName = localStorage.getItem("userName");
    return savedUserName || ""; // Default to empty string if no username is found
  });

  const [cookieSrc, setCookieSrc] = useState(() => {
    // Retrieve cookieSrc from local storage or default to first image
    const savedCookieSrc = localStorage.getItem("cookieSrc");
    return savedCookieSrc || "/Images/Cookies/first.webp";
  });
  function GetUserName() {
    // Check if a username is already saved in local storage
    if (!userName || userName == "" || userName == null) {
      let name = prompt("What Is Your Name?");
      if (name) {
        setUserName(name);
        localStorage.setItem("userName", name); // Save to local storage
      } else {
        setUserName("Guest");
        localStorage.setItem("userName", "Guest"); // Save to local storage
      }
    }
  }

  const getUserName = () => {
    // this is same as GetUserName for using in useEffect- regular version had issue
    // Check if a username is already saved in local storage
    if (!userName || userName == "" || userName == null) {
      let name = prompt("What Is Your Name?");
      if (name) {
        setUserName(name);
        localStorage.setItem("userName", name); // Save to local storage
      } else {
        setUserName("Guest");
        localStorage.setItem("userName", "Guest"); // Save to local storage
      }
    }
  };

  useEffect(getUserName, [userName]); //if i do not use UserName here it need double click on reset button to gett username again

  const levels = [
    { id: 0, name: "L0", cost: 0, increase: 0, src: "" },
    {
      id: 1,
      name: "L1",
      cost: 10,
      increase: 1,
      src: "/Images/Levels/1.png",
    },
    {
      id: 2,
      name: "L2",
      cost: 20,
      increase: 5,
      src: "/Images/Levels/2.png",
    },
    {
      id: 3,
      name: "L3",
      cost: 45,
      increase: 7,
      src: "/Images/Levels/3.png",
    },
    {
      id: 4,
      name: "L4",
      cost: 100,
      increase: 12,
      src: "/Images/Levels/4.png",
    },
    {
      id: 5,
      name: "L5",
      cost: 800,
      increase: 20,
      src: "/Images/Levels/5.png",
    },
  ];
  useEffect(() => {
    const levelInterval = setInterval(() => {
      setCookies((curr) => {
        const newCookies = curr + levels[level].increase;
        localStorage.setItem("cookies", newCookies); // Save to local storage
        return newCookies;
      });
    }, 1000);
    return () => clearInterval(levelInterval);
  }, [level]);
  useEffect(() => {
    localStorage.setItem("level", level); // Save to local storage
  }, [level]);

  useEffect(() => {
    localStorage.setItem("cookieSrc", cookieSrc); // Save to local storage
  }, [cookieSrc]);

  function tapFarming() {
    setCookies((curr) => {
      const newCookies = curr + 1;
      localStorage.setItem("cookies", newCookies); // Save to local storage
      return newCookies;
    });
  }
  function buyLevel(levelId) {
    const selectedLevel = levels.find((level) => level.id === levelId);
    if (cookies >= selectedLevel.cost) {
      setLevel(levelId); // Update to the specific level clicked
      setCookies((curr) => {
        const newCookies = curr - selectedLevel.cost;
        localStorage.setItem("cookies", newCookies); // Save to local storage
        return newCookies;
      });
    } else {
      alert("Not enough cookies to buy this level.");
    }
  }

  const resetGame = () => {
    setCookies(0);
    setLevel(0);
    setCookieSrc("/Images/Cookies/first.webp");
    localStorage.setItem("cookies", 0); // Save to local storage
    localStorage.setItem("level", 0); // Save to local storage
    localStorage.setItem("cookieSrc", "/Images/Cookies/first.webp"); // Save to local storage
    localStorage.removeItem("userName");
    setUserName(() => {
      return "";
    });

    // Only prompt for username if not already set
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
