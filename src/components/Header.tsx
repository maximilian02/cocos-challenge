import cocosLogo from "../assets/cocos.svg";

export function Header() {
  return (
    <div className="header">
      <a href="https://cocoscap.com">
        <img src={cocosLogo} className="logo" alt="Cocos logo" />
        <h4>Challenge App</h4>
      </a>
      <div className="nav">
        <div className="nav_item">
          <a href="/instruments">Instrumentos</a>
        </div>

        <div className="nav_item">
          <a href="/portfolio">Portfolio</a>
        </div>

        <div className="nav_item">
          <a href="/search">Buscar</a>
        </div>

        <div className="nav_item">
          <a href="/orders">Ordenes</a>
        </div>
      </div>
    </div>
  );
}
