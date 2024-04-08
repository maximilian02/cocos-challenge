import { Card } from "../components/Card";

export function Home() {
  return (
    <>
      <h2>Home</h2>
      <ul class="cards">
        <Card title="Instrumentos" type={1} section="/instruments" />
        <Card title="Portfolio" type={2} section="/portfolio" />
        <Card title="Buscar" type={3} section="/search" />
        <Card title="Ordenes" type={4} section="/orders" />
      </ul>
    </>
  );
}
