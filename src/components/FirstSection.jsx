import TapCookie from "./TapCookie";

export default function FirstSection(props) {
  return (
    <section className="FirstSection">
      <p>count {props.cookies}</p>
      <p>{props.lev[props.currentLevel].increase} Cookies per second</p>
      <TapCookie cookieSrc={props.cookieSrc} TapCookies={props.tapCookie} />
    </section>
  );
}
