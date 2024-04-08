import cocosLogo from "./assets/cocos.svg";
import "./app.scss";
import { Card } from "./components/Card";

export function App() {
  return (
    <>
      <div>
        <a href="https://cocoscap.com/" target="_blank">
          <img src={cocosLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Cocos Challenge App</h1>
      <ul class="cards">
        <Card title="Instrumentos" type={1} section="/instruments" />
        <Card title="Portfolio" type={2} section="/portfolio" />
        <Card title="Buscar" type={3} section="/search" />
        <Card title="Ordenes" type={4} section="/orders" />
      </ul>
      <h3>Max Zelarayán @ github.com/maximilian02</h3>
    </>
  );
}
