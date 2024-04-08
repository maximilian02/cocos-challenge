import "./Sidebar.scss";

export function Sidebar() {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/instruments">Instrumentos</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/search">Buscar</a>
        </li>
        <li>
          <a href="/orders">Ordenes</a>
        </li>
      </ul>
    </>
  );
}
