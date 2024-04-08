import cocosLogo from "../assets/cocos.svg";

export function Header() {
  return (
    <div className="header">
      <a href="https://cocoscap.com" target="_blank">
        <img src={cocosLogo} className="logo" alt="Cocos logo" />
      </a>
      <h4>Challenge App</h4>
    </div>
  );
}
