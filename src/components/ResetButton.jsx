export default function ResetButton(props) {
  return (
    <div style={{ position: "relative" }}>
      <button className="footerButton button-reset" onClick={props.onReset}>
        Reset
      </button>
      <img className="footerImg" src="/Images/reset.png" />
    </div>
  );
}
