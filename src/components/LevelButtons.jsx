export default function LevelButtons(props) {
  console.log(props.currentLevel);
  return (
    <div className="ScoreButtons">
      {props.lev.slice(1).map((level) => (
        <div key={level.id} style={{ position: "relative" }}>
          <button
            onClick={() => props.buyLevel(level.id)} // Inline function to pass level.id
            disabled={
              props.cookies < level.cost || level.id <= props.currentLevel
            }
            className={props.currentLevel === level.id ? "Selected" : ""}
          >
            {level.name}
          </button>
          <img className="ScoreImage" src={level.src} />
        </div>
      ))}
    </div>
  );
}
