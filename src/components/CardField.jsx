/* eslint-disable react/prop-types */
import "../styles/CardField.css";

export default function CardField({ cardData }) {
  return (
    <div className="cardField" key={"cardField"}>
      {cardData.map((card) => {
        return (
          <section key={card.id} className="card">
            <img src={card.url} alt={card.name} />
            <h4 className="cardTitle">{card.name}</h4>
          </section>
        );
      })}
    </div>
  );
}
