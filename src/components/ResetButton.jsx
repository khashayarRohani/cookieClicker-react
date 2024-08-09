export default function ResetButton(props) {
  return (
    <div style={{ position: "relative" }}>
      <button className="footerButton" onClick={props.onReset}>
        Reset Game
      </button>
      <img className="footerImg" src="../src/Images/reset.png" />
    </div>
  );
}
