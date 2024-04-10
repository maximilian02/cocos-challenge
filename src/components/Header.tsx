import cocosLogo from "../assets/cocos.svg"

export function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={cocosLogo} className="logo" alt="Cocos logo" />
        <h4>Challenge App</h4>
      </a>
      <div className="nav"></div>
    </div>
  )
}
