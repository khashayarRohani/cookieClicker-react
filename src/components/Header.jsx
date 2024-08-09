import StoreButton from "./StoreButton";

export default function Header(props) {
  return (
    <div className="header">
      <p>Welcome {props.username}</p>
      <div>
        <StoreButton
          setCookieSrc={props.setCookieSrc}
          cookies={props.cookies}
          setCookies={props.setCookies}
        />
      </div>
    </div>
  );
}
