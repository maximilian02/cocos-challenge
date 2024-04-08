import "./Card.scss";

type CardProps = {
  title: string;
  type: number;
  section: string;
};

export function Card({
  title = "Placeholder",
  type,
  section = "#",
}: CardProps) {
  return (
    <>
      <li class="cards__item">
        <a href={section}>
          <div class="card">
            <div class={`card__image card__image--${type}`}></div>
            <div class="card__content">
              <div class="card__title">{title}</div>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}
