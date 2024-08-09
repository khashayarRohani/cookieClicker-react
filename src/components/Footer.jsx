import ToggleButton from "./GuidanceButton";
import MusicButton from "./MusicButton";
import ResetButton from "./ResetButton";

export default function Footer(props) {
  return (
    <div className="footer">
      <ResetButton onReset={props.onReset} />
      <MusicButton />
      <ToggleButton />
    </div>
  );
}
