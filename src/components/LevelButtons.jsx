export default function LevelButtons(props) {
  console.log(props.currentLevel);

  const imageStyle = {
    transition: "transform 0.2s ease",
    animation: "moveLeftRight 20s ease-in-out infinite", // Default animation
  };

  return (
    <div className="ScoreButtons">
      {props.lev.slice(1).map((level) => (
        <div key={level.id} style={{ position: "relative" }}>
          <button
            style={{ position: "relative" }}
            onClick={() => props.buyLevel(level.id)} // Inline function to pass level.id
            disabled={
              props.cookies < level.cost || level.id <= props.currentLevel
            }
            className={props.currentLevel === level.id ? "Selected" : ""}
          >
            <img
              className="ScoreImage"
              style={props.currentLevel === level.id ? imageStyle : null}
              src={level.src}
            />
            {level.name}
          </button>
        </div>
      ))}
    </div>
  );
}
