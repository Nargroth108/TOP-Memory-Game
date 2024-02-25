/* eslint-disable react/prop-types */
// import "../styles/CardField.css";

export default function Card({ card }) {
  return (
    <section key={card.id} className="card">
      <img src={card.url} alt={card.name} />
      <h4 className="cardTitle">{card.name}</h4>
    </section>
  );
}
